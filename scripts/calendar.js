const today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); // Month/date can be expressed with -1... Ex) 11 + 1 = Dec

//FUNCTION to get first line of current month,s calendar
function getCalendarHead(){
    const dates = []; //date=日付 day=曜日
    const dateEndOfMonth = new Date(year, month, 0).getDate();
    //day can be gotten like Sun = 0, Mon = 1, Sat=6 by using getDay() function 
    const dayOfFirstDateOfMonth = new Date(year, month, 1).getDay(); //this equal to how many dates of last month can be in current month,s calendar 

    //ex) 31 30 29 28 27...
    for(let i =0; i< dayOfFirstDateOfMonth; i++){
        dates.unshift({
            date: dateEndOfMonth - i,
            isToday:false,
            isDisabled:true,
        });
    }
    return dates;
}

//FUNCTION to get current month,s calendar
function getCalendarBody(){
    const dates =[]; //date=日付 day=曜日
    const lastDate = new Date(year, month +1,0).getDate();

    for(let i = 1; i <= lastDate; i++){
        dates.push({
            date:i,
            isToday:false,
            isDisabled:false,
        });
    }

    //Overwrides "isToday" property to "true" for today's date
    if(year == today.getFullYear() && month == today.getMonth()){
    dates[today.getDate() - 1].isToday = true;
    }

    return dates;   
}

//FUNCTION to get last week of current month,s calendar
function getCalendarTail(){
    const dates =[]; //date=日付 day=曜日
    const lastDay = new Date(year, month+1, 0).getDay();

    for(let i = 1; i < 7- lastDay; i++){
        dates.push({
            date:i,
            isToday:false,
            isDisabled:true,
        });
    }
    return dates;
}

//FUNCTION to create whole current month's calender
function createCalendar(){

    //Removing calendar after clicking "prev","next"
    const tbody = document.querySelector('tbody');

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }

    //Change year/date
    const title = `${year}/${String(month + 1).padStart(2,'0')}`
    document.getElementById('title').textContent = title;

     //Put days in calendar
    const dates = [
        ...getCalendarHead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;

    for(let i = 0; i < weeksCount; i++){
        weeks.push(dates.splice(0,7));
    }
   
    weeks.forEach(week =>{
        const tr = document.createElement('tr');
        week.forEach(date =>{
            const td = document.createElement('td');

            td.textContent = date.date;
            if(date.isToday){
                td.classList.add('today');
            }
            if(date.isDisabled){
                td.classList.add('disabled');
            }

            tr.appendChild(td);
        });
        document.querySelector('tbody').appendChild(tr);
    });
    }

//Click prev for last month callendar
document.getElementById('prev').addEventListener('click', () => {
 month--;
 if(month < 0 ){
     year--;
     month = 11;
 }
 createCalendar()
});

//Click next for next month callendar
document.getElementById('next').addEventListener('click', () => {
    month++;
    if(month > 11 ){
        year++;
        month = 0;
    }
    createCalendar()
   });

//Go back to current month when "Today" button is clicked
document.getElementById('today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();

    createCalendar();
   });

createCalendar();




 