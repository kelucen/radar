<template>
<div>
   <nav>

        <v-app-bar text app>          
           <img style="width:170px" src="@/assets/images/RadarLogo.png" /> 

        </v-app-bar>
        
     </nav>
    <div class="center_button">
        <b-button @click="setType('Aparelhos')" class="buttons" >Aparelhos</b-button>
        <b-button @click="setType('Equipamentos')" class="buttons">Equipamentos</b-button>
        <b-button @click="setType('EPI')" class="buttons">EPI</b-button>
        <b-button @click="setType('Limpeza')" class="buttons">Limpeza</b-button>
        <b-button @click="setType('Higiene Pessoal')" class="buttons">Higiene Pessoal</b-button>
    </div>
    <div>
        <b-row>
            <h4 class="filter">Filtros:</h4>
            <b-dropdown class="filter-dropdown" :text="filterSelectedItem"  variant="primary">
                <b-dropdown-item @click="setZone('Zona Norte')">Zona Norte</b-dropdown-item>
                <b-dropdown-item @click="setZone('Zona Leste')">Zona Leste</b-dropdown-item>
                <b-dropdown-item @click="setZone('Zona Sul')">Zona Sul</b-dropdown-item>
                <b-dropdown-item @click="setZone('Zona Oeste')">Zona Oeste</b-dropdown-item>
                <b-dropdown-item @click="setZone('Zona Centro-Sul')">Zona Centro-Sul</b-dropdown-item>
                <b-dropdown-item @click="setZone('Zona Centro-Oeste')">Zona Centro-Oeste</b-dropdown-item>
            </b-dropdown>
            <h4 class="filter">Ordenar por:</h4>
             <b-dropdown class="filter-dropdown" :text="sortSelectedItem"  variant="primary">
                <b-dropdown-item @click="sortSelectedItem='Ordem alfabética'">Ordem alfabética</b-dropdown-item>
            </b-dropdown>   
        </b-row>
    </div>
    <br>
    <br>
    <div  v-for="(item,i) in itemsList" :key="item.nome">
        <b-card v-if="show" class="card">
            <h3 style="font-weight:bold">{{item.name}}</h3>
            <b-button  class="expand-icon"  v-if="item.icon" @click="changeIconvalue(i,false)">
                <v-icon style="color:white;">expand_more</v-icon>
            </b-button> 
            <div v-else>
                <v-icon class="expand-icon" @click="changeIconvalue(i,true)">expand_less</v-icon>
                <h5 class="title-local">Locais onde se pode encontrar: </h5>
                    <ul v-for="company in companyList" :key="company.price">
                      <li style="font-weight:bold">R$ {{parseFloat(company.price).toFixed(2)}}</li>
                      <b-row>
                          <div style="font-weight:bold; margin-left:15px">{{company.name}},</div>
                          <div style="margin-left:2px">{{company.address}}</div>
                      </b-row>
                      <b-row>
                          <div style="font-weight:bold; margin-left:15px">Telefone:</div>
                          <div style="margin-left:2px">(92) {{company.phone}}</div>
                      </b-row>
                      <div>{{company.instagram}}</div>
                    </ul>
            </div>
        </b-card>
        
    </div>
    <div v-if="!show" class="empty-list">
        Nenhum resultado encontrado
    </div>
    

</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Equipments',
  data(){
    return{
        filterSelectedItem: "Zonas",
        sortSelectedItem: "Ordem alfabética",
        typeSelected:'',
        itemsList: [],
        show: true, 
        companyList:[],
        listTemp:[]   
    }
    
 
  },
  methods:{
        showItemsList(){
            if(this.itemsList.length==0){
                this.show = false
                this.listTemp = []
            }
            else{
                this.listTemp  = this.itemsList
                this.itemsList = []
                this.companyList = []
                for(let i in this.listTemp){
                    this.itemsList.push({name: this.listTemp[i].name, icon:true})
                    for(let j in this.listTemp[i].companies){
                        this.companyList.push({name: this.listTemp[i].companies[j].name, price:this.listTemp[i].companies[j].pivot.price, 
                        address: this.listTemp[i].companies[j].address, phone: this.listTemp[i].companies[j].phone1, instagram:this.listTemp[i].companies[j].instagram})
                    }
                   
                }
                this.show = true
            }
        },
        setType(type){
            this.typeSelected = type
            this.filterSelectedItem = 'Zonas'
            axios.get('https://radar-backend00.herokuapp.com/products?type='+this.typeSelected)
            .then(response => {
                console.log(response.data)
                this.itemsList = response.data
                this.showItemsList()
            })
        },
        setZone(zone){
            this.filterSelectedItem = zone
             axios.get('https://radar-backend00.herokuapp.com/products?type='+this.typeSelected+'&zone='+this.filterSelectedItem)
            .then(response => {
                console.log(response.data)
                this.itemsList = response.data
                this.showItemsList()
            })
        },
        changeIconvalue(id, valeu){
            this.itemsList[id].icon = valeu
        }
  },
  mounted(){
    // axios.get('http://radar-backend00.herokuapp.com/companies')
    // .then(response => {
    //   console.log(response.data)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/Styles/Equipments.css";
</style>
