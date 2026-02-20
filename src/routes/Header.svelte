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
    let isMobile = $derived(innerWidth < 960);
    let menuState = $state<boolean>(false);
</script>

<svelte:window bind:innerWidth />

<div class="header">
    <div class="title">
        <NavItem
            label="erritix"
            href="/"
        />
    </div>
    <div class="symbol">
        <img
            src={astar}
            alt="Astar"
        />
    </div>
    <div class="navigation">
        {#if !isMobile}
            {#each navData as data (data.label)}
                <NavItem {...data} />
            {/each}
        {:else}
            <NavItem
                label="menu"
                href="#"
                onclick={() => (menuState = !menuState)}
            />
        {/if}
    </div>
    <div
        class="mobileNavDrawer"
        class:active={menuState}
    >
        {#each navData as data (data.label)}
            <NavItem
                {...data}
                bind:isMobile
                onclick={() => (menuState = !menuState)}
            />
        {/each}
    </div>
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
        z-index: 1;
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

    .mobileNavDrawer {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 16px;
        top: 48px;
        left: 0px;
        right: 0px;
        height: 0vh;
        padding: 16px 32px;
        background: var(--background100);
        opacity: 0;
        visibility: hidden;

        &.active {
            height: 100vh;
            opacity: 1;
            visibility: visible;
        }
    }
</style>
