import moment from 'moment';

function init() {
    const $experienceItems = $('.experienceItem');
    $experienceItems.each((index) => {
        const $item = $($experienceItems[index]);
        console.log(index, $item);
        let $start = $item.find('.start');
        let $end = $item.find('.end');
        let startMoment = getMomentFromText($start.text());
        let endMoment = getMomentFromText($end.text());
        let timeElapsed = moment.duration(startMoment.diff(endMoment)).humanize();
        $start.text($start.text() + ' - ');
        let endText = $end.text().toLowerCase() === 'current' ? moment().format('MMMM YYYY') + ' (present)' : $end.text();
        $end.text(endText + ' - ' + timeElapsed);
    });
}

function getMomentFromText(text){
    if(text.toLowerCase() === 'current')
        return moment();
    return moment(text, "MMMM YYYY");
}

$(document).ready(()=>{
    init();
});