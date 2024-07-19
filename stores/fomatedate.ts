
import {format, fromZonedTime} from 'date-fns-tz'
export const useFormateDate = defineStore('fomatedate',{
    state: () =>({
        
    }),
    actions: {
        setDate(datestring: string){
           
            const timezone = 'America/Fortaleza'
            const zonedate = fromZonedTime(new Date(datestring), timezone)
            return format(zonedate, 'dd/MM/yyyy HH:mm')

        }
    }
})  