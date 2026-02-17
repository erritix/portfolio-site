<script lang="ts">
    import terminalBoxes from "$lib/assets/terminalBoxes.svg";
</script>

<section
    class="heroSection"
    id="hero"
>
    <div class="visual">
        <img
            src={terminalBoxes}
            alt="Terminal boxes"
        />
    </div>
    <div class="texts">
        <h1 class="text-heading">It seems it's on development_</h1>
        <p class="text-desc">I guess there is nothing to see here..</p>
    </div>
</section>

<!-- <section></section> -->

<style lang="scss">
    .heroSection {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        gap: 16px;
        min-height: 512px;
        padding: 64px 128px;
        & > * {
            flex: 1 0 0;
            position: relative;
            min-width: 1px;
            min-height: 1px;
        }
    }

    .visual {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
    }
</style>
