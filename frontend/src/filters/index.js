import moment from 'moment';

export default {
    toDate( date ){
        return moment( date ).format('DD/MM/YYYY')
    }
}