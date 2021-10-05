<template>
  <v-app>
    <v-app-bar 
      app
      :color="GET_COLOR_DEFAULT.appToolbar.color"
      :dark="GET_COLOR_DEFAULT.appToolbar.dark"
    >
        <v-app-bar-nav-icon @click="drawer = ! drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Usu&aacute;rios - GITHUB</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--lefter in bar-->
    </v-app-bar>    
    <v-main class="fill-height" :class="GET_COLOR_DEFAULT.main.backgroundColor">
        <v-container fluid>
            <router-view/> 
        </v-container>   
    </v-main>
    <v-navigation-drawer
        app
        v-model="drawer"
    >
        <template v-slot:prepend>
            <v-list-item two-line class="purple darken-1">
                <v-list-item-content>
                    <v-list-item-title class="text-center white--text">Menu Principal</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list
            nav
            shape
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                class="border-bottom-top"
            >
                <v-list-item-icon>
                    <v-icon color="purple darken-3">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>    
  </v-app>
</template>
<script>

import { mapGetters } from 'vuex';
export default {
    name: 'App',
    components: {

    },
    data: () => ({
        selectedItem: 1,
        drawer: true,
        items: [
            { title: 'Localizar usuários', icon: 'fas fa-search', to: 'search' },
            { title: 'Histórico de buscas', icon: 'fas fa-history', to: 'history' },
        ],        
    }),
    computed:{
        ...mapGetters([
            'GET_COLOR_DEFAULT',
        ])
    },
    created(){

    },
    methods: {

    },
};
</script>
<style lang="scss" >
    .border-bottom-top{
        border-bottom: 1px solid #dedede;
    }
    .v-breadcrumbs__item{
        color:purple !important
    }
    .v-breadcrumbs__item:hover{
        color:purple !important;
        text-decoration: underline;
    }    
    .v-breadcrumbs__item--disabled{
        color: #666 !important;
    }    
</style>