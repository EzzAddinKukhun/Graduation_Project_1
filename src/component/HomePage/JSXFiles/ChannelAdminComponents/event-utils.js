
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [

  {
    // id: createEventId(),
    // title: "THIRD EVENT",
    // start:"2022-12-20" + "T08:00:00",
    // end:"2022-12-25" + "T12:30:00"
  }
  
]



export function receiveArray (paramEvents){

  console.log(paramEvents)

  paramEvents.map ((eve)=>{
    let obj =  {
        id: createEventId(),
        title: eve.name,
        start: eve.sdate + eve.stime,
        end: eve.edate + eve.etime
      }
  
      INITIAL_EVENTS.push(obj); 
  })
  
  
}

console.log(INITIAL_EVENTS)


export function createEventId() {
  
  return String(eventGuid++)
}
