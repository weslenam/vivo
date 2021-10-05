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
                <v-toolbar-title class="mr-5">Histórico de buscas</v-toolbar-title> 
            </v-toolbar>
        </v-card>
        <v-card class="mt-4">
            <v-data-table
                :headers="headers"
                :items="GET_LIST"
                class="elevation-1"
                no-data-text="Seu histórico de buscas esta vazio"
                >
                <template v-slot:[`item.result_date`]="{ item }">
                    <div>
                    {{ item.result_date | toDate }}
                    </div>                    
                </template>
                <template v-slot:[`item.find_text`]="{ item }">
                    <div>
                        <v-btn text color="purple" @click="consult(item)">
                            {{ item.find_text }}
                        </v-btn>
                    </div>                    
                </template>            
            </v-data-table>            
        </v-card>                 
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>
                <v-card-title class="text-h6 grey lighten-2">
                    Consulta de uma busca realizada
                </v-card-title>
                <v-card-text class="mt-4">
                    <div>Busca por: {{history.find_text}}</div>
                    <div>Data da busca: {{history.result_date | toDate}}</div>
                    <div>Resultados encontrados: {{history.quantity_founded}}</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                        color="purple darken-3"
                        @click="toSearch( history.find_text )"
                        dark
                        flat
                    >
                        <v-icon class="mr-2">fas fa-search</v-icon>
                        Buscar novamente
                    </v-btn>                    
                    <v-spacer></v-spacer>
                    <v-btn
                        color="gray"
                        @click="dialog = false"
                        flat
                        text
                        class="gray lighten-2--text"
                    >
                        <v-icon class="mr-2">fas fa-times</v-icon>
                        Fechar
                    </v-btn>                    
                </v-card-actions>
            </v-card>
        </v-dialog>        
    </v-card>
</template>

<script>

    import { mapActions, mapGetters, mapMutations } from 'vuex'
    
    export default {
        name: '',
        data: () => ({
            dialog: false,
            history:{
                find_text:'',
                result_date:'',
                quantity_founded:1
            },
            headers: [
                { text: 'Busca por', align: 'start', value: 'find_text'},
                { text: 'Data da Busca', value: 'result_date' },                
                { text: 'Resultados encontrados', value: 'quantity_founded' },
                // { text: '', value: 'id' },
            ],             
            items: [
                {
                    text: 'Menu Principal',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Histórico de buscas',
                    disabled: true,
                    href: 'search',
                },
            ],
        }),
        computed: {
            ...mapGetters([
                'GET_LIST',
            ]),
        },          
        methods: {
            ...mapMutations([
                'SET_LIST',
                'SET_TO_SEARCH'
            ]),
            ...mapActions([
                'fetchHistory',
            ]),    
            async fetch(){
                await this.fetchHistory()
            },
            consult(item){
                this.dialog = true
                this.history = item
            },
            toSearch( find_text ){
                this.SET_TO_SEARCH( find_text )
                this.$router.push('search')
            }

        },        
        created() {
            this.SET_LIST([])
        },
        mounted(){
            this.fetch()            
        }
    }
</script>