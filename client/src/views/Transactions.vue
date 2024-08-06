<template>
    <div>
        <NavigationBar/>
        <div v-show="transactionList.length!=0">
            <BasePageHeader v-bind:header="'Transactions'" v-bind:icon="'receipt'" v-bind:description="description" v-bind:subDescription="subDescription"/>
            <div class="row">
                <div class="column" v-for="(transactionId, index) in transactionList" :key="index">
                    <TransactionsCard v-bind:transactionId="transactionId[1]"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePageHeader from "../components/BasePageHeader.vue"
import TransactionsCard from '../components/TransactionsCard.vue';
import NavigationBar from '../components/NavigationBar.vue';

export default {
    name: 'Transactions',
    components: {
        TransactionsCard,
        BasePageHeader,
        NavigationBar
    },
    data() {
        return {
            currUser: 'currentUser', //db
            transactionList: [],
            description: "Here are the details of your past transations.",
            subDescription: "If there are any issues, do copy the Transaction ID and let us know via the Contact Us tab.",
        }
    },
    methods: {
        fetchTransactions: function() {
            // database.collection("users").doc(this.currUser).get().then(doc => {
            //     if (doc.data().transactions !== undefined) {
            //         var temp = Object.entries(doc.data().transactions)
            //         for (var i=temp.length-1; i>=0; i--) {

            //             this.transactionList.push(temp[i])

            //         }
            //     }
            // })
        }
    },
    created() {
        this.fetchTransactions();
    }
}
</script>
