import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        parsedat: 'N', // Initialize parsedat to 'N'
    }),
    actions: {
        setParsedat(newValue) {
            this.parsedat = newValue;
        },
    },
});