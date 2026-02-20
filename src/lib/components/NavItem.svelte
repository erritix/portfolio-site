<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props extends HTMLAnchorAttributes {
        label: string;
        isActive?: boolean;
        isMobile?: boolean;
    }

    let { isActive = $bindable(false), isMobile = $bindable(false), ...props }: Props = $props();
</script>

<a
    class="navItem"
    class:active={isActive}
    class:mobile={isMobile}
    {...props}
>
    <div class="label">
        [{props.label}
        <div class="spacer"></div>
        ]
    </div>
    <div class="highlight"></div>
</a>

<style lang="scss">
    .navItem {
        display: block;
        position: relative;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--text200);
        text-decoration: none;
        clear: both;
        z-index: 1;

        &.active {
            color: var(--background100);
        }

        &.mobile {
            font-size: 32px;
        }
    }

    .label {
        display: flex;
        background: transparent;

        & > .spacer {
            flex-grow: 0;
        }
    }

    .highlight {
        position: absolute;
        max-height: 1px;
        left: 2px;
        right: 2px;
        bottom: 0px;
        background: var(--text200);
        opacity: 0;
        z-index: -1;

        .navItem:hover & {
            min-height: 1px;
            opacity: 1;
        }

        .navItem.active & {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            max-height: none;
            background: var(--secondary);
            opacity: 1;
        }

        .navItem.mobile.active & {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            max-height: none;
            opacity: 1;
        }
    }
</style>
