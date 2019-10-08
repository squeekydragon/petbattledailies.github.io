function updateOneTimeTotal() {
    let tasksTotal = $('.onetime').find('input').length;

    let tasksCompleted = $('.onetime').find('input:checked').length;;

    let percentageCompleted = Math.round(tasksCompleted / tasksTotal * 100);
    $('.progress-onetime').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);

    if($('#general').find('input').length === $('#general').find('input:checked').length) {
        $('#generalProgress').css('display', 'none');
        $('#generalComplete').css('display', 'inline-block');
    } else {
        $('#generalProgress').css('display', 'inline-block');
        $('#generalComplete').css('display', 'none');
    }

    if($('#questing').find('input').length === $('#questing').find('input:checked').length) {
        $('#questingProgress').css('display', 'none');
        $('#questingComplete').css('display', 'inline-block');
    } else {
        $('#questingProgress').css('display', 'inline-block');
        $('#questingComplete').css('display', 'none');
    }

    if($('#warCampaign').find('input').length === $('#warCampaign').find('input:checked').length) {
        $('#warCampaignProgress').css('display', 'none');
        $('#warCampaignComplete').css('display', 'inline-block');
    } else {
        $('#warCampaignProgress').css('display', 'inline-block');
        $('#warCampaignComplete').css('display', 'none');
    }
}

function updateDailyTotal() {
    let tasksTotal = $('.daily').find('input').length;

    let tasksCompleted = $('.daily').find('input:checked').length;;

    let percentageCompleted = Math.round(tasksCompleted / tasksTotal * 100);
    $('.progress-daily').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);

    if($('#missionTable').find('input').length === $('#missionTable').find('input:checked').length) {
        $('#missionTableProgress').css('display', 'none');
        $('#missionTableComplete').css('display', 'inline-block');
    } else {
        $('#missionTableProgress').css('display', 'inline-block');
        $('#missionTableComplete').css('display', 'none');
    }

    if($('#shipUpgrades').find('input').length === $('#shipUpgrades').find('input:checked').length) {
        $('#shipUpgradesProgress').css('display', 'none');
        $('#shipUpgradesComplete').css('display', 'inline-block');
    } else {
        $('#shipUpgradesProgress').css('display', 'inline-block');
        $('#shipUpgradesComplete').css('display', 'none');
    }

    if($('#worldQuests').find('input').length === $('#worldQuests').find('input:checked').length) {
        $('#worldQuestsProgress').css('display', 'none');
        $('#worldQuestsComplete').css('display', 'inline-block');
    } else {
        $('#worldQuestsProgress').css('display', 'inline-block');
        $('#worldQuestsComplete').css('display', 'none');
    }

    if($('#heroics').find('input').length === $('#heroics').find('input:checked').length) {
        $('#heroicsProgress').css('display', 'none');
        $('#heroicsComplete').css('display', 'inline-block');
    } else {
        $('#heroicsProgress').css('display', 'inline-block');
        $('#heroicsComplete').css('display', 'none');
    }
}

function updateWeeklyTotal() {
    let tasksTotal = $('.weekly').find('input').length;

    let tasksCompleted = $('.weekly').find('input:checked').length;

    let percentageCompleted = Math.round(tasksCompleted / tasksTotal * 100);
    $('.progress-weekly').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);

    if($('#expeditions').find('input').length === $('#expeditions').find('input:checked').length) {
        $('#expeditionsProgress').css('display', 'none');
        $('#expeditionsComplete').css('display', 'inline-block');
    } else {
        $('#expeditionsProgress').css('display', 'inline-block');
        $('#expeditionsComplete').css('display', 'none');
    }

    if($('#mythicDungeons').find('input').length === $('#mythicDungeons').find('input:checked').length) {
        $('#mythicDungeonsProgress').css('display', 'none');
        $('#mythicDungeonsComplete').css('display', 'inline-block');
    } else {
        $('#mythicDungeonsProgress').css('display', 'inline-block');
        $('#mythicDungeonsComplete').css('display', 'none');
    }
}

function resetDailyTasks() {
    $('.daily').find('input:checkbox').each(function uncheck() {
        this.checked = false;
    })
    updateDailyTotal();
}

function resetWeeklyTasks() {
    $('.weekly').find('input:checkbox').each(function uncheck() {
        this.checked = false;
    })
    updateWeeklyTotal();
}

$('input').change(() => {
    updateOneTimeTotal();
    updateDailyTotal();
    updateWeeklyTotal();
});

$(document).ready(() => {
    updateOneTimeTotal();
    updateDailyTotal();
    updateWeeklyTotal();
})