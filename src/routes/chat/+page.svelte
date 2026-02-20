<script lang="ts">
    import type { Message } from "$lib/types/db";
    import { json } from "@sveltejs/kit";
    import type { PageProps } from "./$types";
    import { shortDateFormat } from "$lib/utils/dateFormat";

    let { data, form }: PageProps = $props();
    let msgLogs: Element;

    $effect(() => {
        msgLogs.scrollTo({ top: msgLogs.scrollHeight });
    });
</script>

<div class="viewBox">
    <div
        class="msgLogs"
        bind:this={msgLogs}
    >
        {#if data.results.length == 0}
            <span>Be first to message!</span>
        {:else}
            {#each data.results as msg (msg.timestamp)}
                <div class="message">
                    <div class="msgMetadata">
                        <span class="msgSender">{msg.sender}</span>
                        <span class="msgTimestamp">{shortDateFormat(msg.timestamp * 1000)}</span>
                    </div>
                    <p class="msgContent text-desc">{msg.message}</p>
                </div>
            {/each}
        {/if}
    </div>
    <form
        method="POST"
        action="?/sendmessage"
        class="msgForm"
    >
        <label class="labelMsg">
            Message
            <input
                type="text"
                name="message"
                maxlength="255"
                class="inputMsg"
                required
            />
        </label>
        <label class="labelUname">
            Username
            <input
                type="text"
                name="username"
                maxlength="32"
                value="Anonymous"
                class="inputUname"
            />
        </label>
        <button class="btnSend">send</button>
    </form>
</div>

<style lang="scss">
    .viewBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        padding: 64px 32px;
        font-size: 14px;

        & > * {
            flex-grow: 1;
            width: 100%;
        }
    }
    .msgLogs {
        display: flex;
        flex-direction: column;
        height: 512px;
        border: 1px solid var(--border);
        overflow: scroll;
    }

    .msgForm {
        display: flex;
        gap: 8px;

        & > * {
            flex-grow: 1;
        }

        & input {
            font-size: 14px;
            padding: 8px 12px;
            border: 1px solid var(--border);
            outline: none;
            background-color: var(--birneue100);
        }

        & > label {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            color: var(--text200);
        }

        & .labelUname {
            flex: 0 1;
        }

        & > .btnSend {
            flex: 0 0;
            padding: 8px 12px;
            color: var(--background100);
            background: var(--secondary);
            outline: none;
            border: 1px solid var(--secondary);

            &:hover {
                color: var(--text100);
                background: var(--birneue200);
            }
        }
    }

    .message {
        padding: 8px 16px;

        & > .msgMetadata {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;

            & > .msgSender {
                font-weight: 600;
                font-size: 14px;
                color: var(--text200);
            }

            & > .msgTimestamp {
                font-size: 12px;
                color: var(--text300);
            }
        }

        &:hover {
            background: var(--birneue200);
        }
    }

    @media only screen and (max-width: 720px) {
        .msgForm {
            flex-direction: column;
        }
    }
</style>
