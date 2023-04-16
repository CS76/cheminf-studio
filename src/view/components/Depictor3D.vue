<template>
    <div>
        <iframe
            :width="width"
            :height="height"
            :src="
                'https://dev.api.naturalproducts.net/chem/depict3D?smiles=' +
                encodedSmiles
            "
            frameborder="0"
        ></iframe>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        molecule: String,
        width: {
            type: Number,
            default: 300,
        },
        height: {
            type: Number,
            default: 300,
        },
    },
    computed: {
        encodedSmiles() {
            return encodeURIComponent(this.molecule);
        },
    },
    data() {
        return {
            results: [],
        };
    },
    mounted() {},
    methods: {},
};
</script>
