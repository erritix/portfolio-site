<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLAnchorElement> {
        label: string;
        isActive?: boolean;
        isMobile?: boolean;
    }

    let { isActive = $bindable(false), ...props }: Props = $props();

    // function clickHandler() {
    //     isActive = !isActive;
    // }
</script>

<a
    class="navItem"
    class:active={isActive}
    {...props}
>
    <span>[{props.label}]</span>
    <div class="highlight"></div>
</a>

<style lang="scss">
    .navItem {
        position: relative;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--text200);
        text-decoration: none;
        font-variation-settings: "wght" 400;

        &.active {
            color: var(--text100);
            font-variation-settings: "wght" 700;
        }
    }

    .highlight {
        position: absolute;
        height: 1px;
        left: 2px;
        right: 2px;
        bottom: -1px;
        opacity: 0;
        background: var(--text200);

        .navItem:hover & {
            opacity: 1;
        }

        .navItem.active & {
            opacity: 1;
            background: var(--text100);
        }
    }
</style>
