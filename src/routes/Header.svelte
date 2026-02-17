<script lang="ts">
    import { resolve } from "$app/paths";
    import astar from "$lib/assets/astarSigStroke.svg";
    import NavItem from "$lib/components/NavItem.svelte";

    const navData: { label: string; href: string }[] = [
        { label: "hello", href: "#hero" },
        { label: "about", href: "#about" },
        { label: "projects", href: "#projects" },
        { label: "contacts", href: "#contacts" },
    ];
</script>

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
        {#each navData as data (data.label)}
            <NavItem {...data} />
        {/each}
    </div>
</div>

<style lang="scss">
    @use "$lib/styles/variables" as *;

    .header {
        position: sticky;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        padding: 0 16px;
        border: solid var(--border);
        border-width: 1px 0;
    }

    .titleText {
        color: var(--text200);
        font-size: 14px;
        text-transform: uppercase;
    }

    .symbol {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;

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
</style>
