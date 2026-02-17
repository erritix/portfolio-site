<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        label: string;
        isActive?: boolean;
        href: string;
    };

    let { isActive = $bindable(false), href, ...props }: Props = $props();

    // function clickHandler() {
    //     isActive = !isActive;
    // }
</script>

<a
    class="navItem"
    class:active={isActive}
    {href}
>
    <span>[{props.label}]</span>
    <div class="underline"></div>
</a>

<style lang="scss">
    .navItem {
        position: relative;
        font-size: 16px;
        text-transform: uppercase;
        color: var(--text200);
        text-decoration: none;
        font-variation-settings: "wght" 400;

        &:hover .underline {
            opacity: 1;
        }

        &.active {
            color: var(--text100);
            font-variation-settings: "wght" 700;

            & .underline {
                opacity: 1;
                // height: 2px;
                background: var(--text100);
            }
        }
    }

    .underline {
        position: absolute;
        height: 1px;
        left: 2px;
        right: 2px;
        bottom: -1px;
        opacity: 0;
        background: var(--text200);
    }
</style>
