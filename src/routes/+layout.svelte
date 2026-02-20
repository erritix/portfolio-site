<script lang="ts">
    import "$lib/styles/App.scss";
    import "$lib/styles/Root.scss";
    import "$lib/styles/_variables.scss";
    import favicon from "$lib/assets/astarIcon.svg";
    import Header from "./Header.svelte";

    let { children } = $props();
    const style = getComputedStyle(document.documentElement);
    const background100 = style.getPropertyValue("--background100");
</script>

<svelte:head>
    <link
        rel="icon"
        href={favicon}
    />
    <title>This is Erritix</title>
    <!-- Open Graph Meta Tags -->
    <meta
        property="og:title"
        content="Erritix's Site"
    />
    <meta
        property="og:description"
        content="An Erritix's curated digital profile"
    />
    <meta
        property="og:image"
        content="https://erritix.qzz.io/assets/erritixBanner.jpg"
    />
    <meta
        property="og:url"
        content="https://erritix.qzz.io"
    />
    <meta
        property="og:type"
        content="website"
    />
    <meta
        name="twitter:title"
        content="This is Erritix"
    />
    <meta
        name="twitter:description"
        content="Erritix's curated digital profile"
    />
    <meta
        name="twitter:image"
        content="https://erritix.qzz.io/assets/erritixBanner.jpg"
    />
    <meta
        name="twitter:card"
        content="summary_large_image"
    />
    <meta
        name="theme-color"
        content={background100}
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
