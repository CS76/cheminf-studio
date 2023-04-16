<template>
    <div class="justify-center">
        <div
            v-if="source == 'ocl'"
            class="flex justify-center align-middle pt-5"
            v-html="getSVGString(molecule)"
        ></div>
        <div class="flex" v-else>
            <img
                class="mx-auto"
                :src="
                    'https://dev.api.naturalproducts.net/chem/depict?smiles=' +
                    encodedSmiles +
                    '&height=' +
                    height +
                    '&width=' +
                    width
                "
                alt=""
            />
        </div>
    </div>
</template>
<script>
import OCL from "openchemlib/full";

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
        source: {
            type: String,
            default: "cpm",
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
    methods: {
        getSVGString() {
            if (this.molecule) {
                const options = {
                    suppressChiralText: true,
                    autoCropMargin: true,
                };
                let mol = OCL.Molecule.fromSmiles(this.molecule);
                return mol.toSVG(
                    this.width,
                    this.height,
                    mol.getIDCode,
                    options
                );
            }
        },
    },
};
</script>
