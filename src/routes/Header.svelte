<script lang="ts">
    import astar from "$lib/assets/astarSigStroke.svg";
    import NavItem from "$lib/components/NavItem.svelte";

    const navData: { label: string; href: string }[] = [
        { label: "hello", href: "/#hero" },
        { label: "about", href: "/#about" },
        { label: "projects", href: "/#projects" },
        { label: "contacts", href: "/#contacts" },
    ];

    let innerWidth = $state<number>(1);
    let menuState = $state<boolean>(false);
</script>

<svelte:window bind:innerWidth />

<div class="header">
    <div class="title">
        <span class="titleText">erritix</span>
    </div>
    <div class="symbol">
        <img
            src={astar}
            alt="Astar"
        />
    </div>
    <div class="navigation">
        {#if innerWidth > 960}
            {#each navData as data (data.label)}
                <NavItem {...data} />
            {/each}
        {:else}
            <NavItem
                label="menu"
                onclick={() => (menuState = !menuState)}
            />
        {/if}
    </div>
    <div
        class="mMenuOverlay"
        class:active={menuState}
    ></div>
</div>

<style lang="scss">
    @use "$lib/styles/variables" as *;

    .header {
        position: sticky;
        top: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        padding: 0 16px;
        margin-top: 32px;
        background: var(--background100);
        border: solid var(--border);
        border-width: 1px 0;
        z-index: 200;
    }

    .titleText {
        color: var(--text200);
        font-size: 14px;
        text-transform: uppercase;
    }

    .symbol {
        flex: none;
        position: absolute;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        transform: translateX(-50%);

        & > * {
            height: 32px;
        }
    }

    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 8px;
    }

    .mMenuOverlay {
        position: absolute;
        height: 0px;
        background: var(--text100);

        &.active {
            top: 48px;
            left: -16px;
            right: -16px;
            height: 100vh;
        }
    }
</style>
