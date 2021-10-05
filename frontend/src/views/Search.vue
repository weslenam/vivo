<template>
    <v-card
        flat
        color="transparent"
    >
        <v-breadcrumbs class="ma-0 pa-0 mb-4"
            :items="items"
        ></v-breadcrumbs>        

        <v-card 
            flat 
            color="transparent"
            >
            <v-toolbar flat>
                <v-toolbar-title class="mr-5">Localizar usuários</v-toolbar-title>
                <v-col cols="5" sm="5" md="5" >
                    <v-text-field
                        v-model="to_find"
                        hide-details
                        single-line
                        label="informe o usuário para realizar a busca"
                        color="purple"
                        @keyup.enter.stop="fetch"
                        @keyup.delete.stop="reset"
                    >
                    </v-text-field>            
                </v-col>
                <v-btn icon color="purple" dark @click="fetch">
                    <v-icon>fas fa-search</v-icon>
                </v-btn>                
                <v-btn icon color="grey ligthen-2" dark @click="clear">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>                
            </v-toolbar>
        </v-card>
        <v-card class="mt-4" v-if="GET_USERS">
            <v-data-table
                :page="page"
                :pageCount="numberOfPages"
                :headers="headers"
                :options.sync="options"
                :server-items-length="GET_TOTAL_USERS"
                :items="GET_USERS"
                class="elevation-1"
                :no-data-text="no_data"
            ></v-data-table>            
        </v-card>
    </v-card>
</template>

<script>

    import { mapActions, mapGetters, mapMutations } from 'vuex'

    export default {
        name: '',
        data: () => ({
            page: 1,
            numberOfPages: 0,
            options: {},
            no_data: 'Nenhum registro de usuário',
            to_find: null,
            items: [
                { text: 'Menu Principal', disabled: false, href: '/', },
                { text: 'Localizar usuários', disabled: true, href: 'search', },
            ],
            headers: [
                { text: 'Usuário', align: 'start', value: 'login'},
                { text: 'Repositorio', value: 'html_url' },
            ],        
        }),
        watch:{
            options:{
                handler(){
                    this.fetch()
                }
            }
        },
        computed: {
            ...mapGetters([
                'GET_USERS',
                'GET_TOTAL_USERS',
                'GET_TO_SEARCH'
            ]),
        },        
        methods: {
            ...mapMutations([
                'SET_USERS',
                'SET_TOTAL_USERS',
                'SET_TO_SEARCH'
            ]),            
            ...mapActions([
                'fetchUsers',
                'commitHistory'
            ]),
            clear(){
                this.SET_USERS([])
                this.SET_TOTAL_USERS(0)
                this.no_data = 'Nenhum registro de usuário',
                this.to_find = ''
            },
            reset(){
                if( ! this.to_find ){
                    this.clear()
                }
            },
            async fetch(){

                const { page, itemsPerPage } = this.options;

                if( ! this.to_find ){
                    this.clear()
                    return false
                }

                await this.fetchUsers({
                    q: this.to_find,
                    per_page: itemsPerPage,
                    page: page,
                });

                if( this.GET_TOTAL_USERS > 0 ){

                    // saving results in historydb
                    await this.commitHistory({
                        find_text: this.to_find,
                        quantity_founded: this.GET_TOTAL_USERS
                    })

                    this.numberOfPages = Math.ceil(
                        this.GET_TOTAL_USERS / itemsPerPage
                    );                    
                }
                else{
                    this.no_data = `Nenhum usuário encontrado: ${this.to_find}`                    
                }

            }
        },
        created() {
            this.clear()
        },
        mounted(){
            if( this.GET_TO_SEARCH ){
                this.to_find = this.GET_TO_SEARCH
                // this.fetch()
            }
        },
        // assegura a limpeza da busca se houver
        beforeDestroy() {
            this.SET_TO_SEARCH('')
        },
    }
</script>