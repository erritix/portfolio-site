<script lang="ts">
    import "$lib/styles/App.scss";
    import "$lib/styles/Root.scss";
    import "$lib/styles/_variables.scss";
    import favicon from "$lib/assets/favicon.svg";
    import Header from "./Header.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link
        rel="icon"
        href={favicon}
    />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    />
</svelte:head>

<div id="app">
    <div class="leftRail"></div>
    <main class="mainContent">
        <Header />
        {@render children()}
    </main>
    <div class="leftRail"></div>
</div>
