<template>

<div class="slider-wrapper">
    <slot></slot>
</div>
    
</template>

<script>
// Importo la libreria
import { tns } from "tiny-slider/src/tiny-slider"

// Importo los estilos de TinySlider
import "tiny-slider/dist/tiny-slider.css"

export default {

    name: "TinySlider",

    data() {
        return {
            // Con un $ al inicio de las propiedades indicamos que no aplicaremos reactividad dentro del elemento
            $slider: null
        }
    },

    mounted() {
        this.init();
    },

    methods: {
    
        init() {
            // ¡Se puede usar VanillaJS!
            //console.log(this.$el.querySelectorAll(".slider-item"));

            const settings = {
                container: this.$el,
                mode: "gallery",
            };

            this.$slider = tns(settings);
            
        }

    },

    beforeDestroy() {

        if (this.$slider)
            this.$slider.destroy();

    }

}
</script>