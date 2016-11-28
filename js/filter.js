/**
 * Created by ronakp on 30-09-2016.
 */
oneAppmod.filter("genderFilter", function () {
    return function (gender) {
        switch (gender){
            case 1:
                return 'male';
            case 2:
                return 'female';
            case 3:
                return 'unspecified';
        }
    }

});

oneAppmod.filter("salaryFilter", function () {
    return function (salary) {
        if(salary > 4000 && salary < 6000){

            return 'Level 2';
        }
        else if(salary >= 6000){

            return 'Level 3';
        }
        else if(salary < 4000) {

            return 'Level 1';
        }
    }

});