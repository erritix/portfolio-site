<script lang="ts">
    import terminalBoxes from "$lib/assets/terminalBoxes.svg";

    let x = () => {
        let current = "";

        console.log("hello");

        document.querySelectorAll("section").forEach((section) => {
            const sectionTop = section.offsetTop;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("id") || "";
            }
        });

        console.log("Current section:", current);
    };
</script>

<svelte:window onscroll={() => console.log("hello")} />

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
        padding: 0 64px;
        margin-bottom: 1024px;

        & > * {
            flex: 1 0;
            position: relative;
            min-width: 1px;
            min-height: 1px;
        }
    }

    .visual {
        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
            height: 200px;
        }
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
    }

    @media only screen and (max-width: 720px) {
        .heroSection {
            flex-direction: column;
            min-height: 768px;
            padding: 96px 32px;
        }

        .visual > * {
            height: 128px;
        }

        .texts {
            justify-content: flex-start;
        }
    }
</style>
