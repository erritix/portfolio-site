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
    <!-- Primary Meta Tags -->
    <title>This is Erritix</title>
    <meta
        name="title"
        content="This is Erritix"
    />
    <meta
        name="description"
        content="Erritix's curated digital profile"
    />

    <!-- Open Graph / Facebook -->
    <meta
        property="og:type"
        content="website"
    />
    <meta
        property="og:url"
        content="http://erritix.qzz.io/"
    />
    <meta
        property="og:title"
        content="This is Erritix"
    />
    <meta
        property="og:description"
        content="Erritix's curated digital profile"
    />
    <meta
        property="og:image"
        content="https://erritix.qzz.io/assets/erritixBanner.png"
    />

    <!-- X (Twitter) -->
    <meta
        property="twitter:card"
        content="summary_large_image"
    />
    <meta
        property="twitter:url"
        content="http://erritix.qzz.io/"
    />
    <meta
        property="twitter:title"
        content="This is Erritix"
    />
    <meta
        property="twitter:description"
        content="Erritix's curated digital profile"
    />
    <meta
        property="twitter:image"
        content="https://erritix.qzz.io/assets/erritixBanner.png"
    />

    <!-- Meta Tags Generated with https://metatags.io -->
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
