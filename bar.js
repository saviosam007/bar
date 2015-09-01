/**
 * Created by SavioJoseph on 8/31/2015.
 */
(function(){

var app=angular.module("myapp",[]);
app.controller("mainCtrl",['$scope','$rootScope',function($scope,$rootScope){
    var num=0;
    var mnum=0;
    var marnum=0;
    var snum=0;
    var mannum=0;
    var a=this;
  //  $scope.order = ['vodka', 'sweet Vermouth', 'agave nectar','cherries','gin','dry Vermouth','orange','celery stalks','tequila','bloody mary mix','limes','olives','whiskey'];
    $scope.drink= {
        "vodka": {
            "content": 750,
            "type": "ml"
        },
        "gin": {
            "content": 1.5,
            "type": "L"
        }
        ,
        "tequila": {
            "content": 750,
            "type": "ml"
        },

        "whiskey": {
            "content": 750,
            "type": "ml"
        },

        "sweet_Vermouth": {
            "content": 750,
            "type": "ml"
        },
        "dry_Vermouth": {
            "content": 750,
            "type": "ml"
        },
        "bloody_mary_mix": {
            "content": 2,
            "type": "L"
        },
        "agave_nectar": {
            "content": 24,
            "type": "oz"
        },
        "orange_juice": {
            "content": 48,
            "type": "oz"
        },
        "limes": {
            "content": 36,
            "type": ""
        },
        "cherries": {
            "content": 9,
            "type": ""
        },
        "celery_stalks": {
            "content": 16,
            "type": ""
        },
        "olives": {
            "content": 24,
            "type": ""
        }
    }

    a.cal= function (name,count,count1,type) {
        //console.log(count);
       // console.log(count1);
       // console.log(type);

    //    num = num + count1;
      //  $scope.count1 = num;
       // console.log(count1);
        if(type==="increase"){
            num = num + count1;
            $scope.count1 = num;
        }
        else if(type==="decrease"){
            num = num - 1;
            $scope.count1 = num;
        }
        count = count + 1;
        //  console.log(num+count);
        if (name === "bloodymary" && count > 0) {
           // console.log($scope.drink.vodka.content);
            if ($scope.drink.vodka.content >= 59 && $scope.drink.bloody_mary_mix.content >= 0.118 && $scope.drink.celery_stalks.content > 1) {
               // console.log("savio bloody mary");
                if(type==="increase") {
                    $scope.drink.vodka.content = (($scope.drink.vodka.content) - (count * 29.5 * 2));
                    $scope.drink.bloody_mary_mix.content = ((($scope.drink.bloody_mary_mix.content * 1000) - (count * 29.5 * 4)) / 1000);
                    $scope.drink.celery_stalks.content = ($scope.drink.celery_stalks.content - (count * 1));
                }
                else if(type==="decrease"){
                    $scope.drink.vodka.content = (($scope.drink.vodka.content) + (count * 29.5 * 2));
                    $scope.drink.bloody_mary_mix.content = ((($scope.drink.bloody_mary_mix.content * 1000) + (count * 29.5 * 4)) / 1000);
                    $scope.drink.celery_stalks.content = ($scope.drink.celery_stalks.content + (count * 1));
                }

            }
            else {
                window.alert("This drink is not available");
            }
        }
    }

    a.mcal= function(mname,mcount,mcount1,type) {
       console.log(mname);
       /* mnum = mnum + mcount1;
        $scope.mcount1 = mnum;
        console.log(mcount1);
        mcount1 = mcount1 + 1;*/

          console.log(type)
        if(type==="increase"){
            mnum = mnum + mcount1;
            $scope.mcount1 = mnum;
            console.log(mnum);
        }
        else if(type==="decrease"){
            mnum = mnum - 1;
            $scope.mcount1 = mnum;
        }
        mcount = mcount + 1;

        if (mname === "martini" && mcount > 0) {
            console.log($scope.drink.vodka.content);
            if ($scope.drink.gin.content >= 0.059 && $scope.drink.dry_Vermouth.content >= 29.5 && $scope.drink.olives.content > 1) {
                console.log("savio martini");
                if(type ==="increase") {
                    $scope.drink.dry_Vermouth.content = (($scope.drink.dry_Vermouth.content) - (mcount * 29.5 * 1));
                    $scope.drink.gin.content = ((($scope.drink.gin.content * 1000) - (mcount * 29.5 * 2)) / 1000);
                    $scope.drink.olives.content = ($scope.drink.olives.content - (mcount * 1));
                }
                else if(type==="decrease"){
                    $scope.drink.dry_Vermouth.content = (($scope.drink.dry_Vermouth.content) + (mcount * 29.5 * 1));
                    $scope.drink.gin.content = ((($scope.drink.gin.content * 1000) + (mcount * 29.5 * 2)) / 1000);
                    $scope.drink.olives.content = ($scope.drink.olives.content + (mcount * 1));
                }
            }
            else {
                window.alert("This drink is not available");
            }
        }
    }

    a.margritacal= function(marname,marcount,marcount1,type) {
        /*console.log("reached");
        console.log(marname);
        marnum = marnum + marcount1;
        $scope.marcount1 = marnum;
        console.log(marcount1);
        marcount1 = marcount1 + 1;
        marcount = marcount + 1; */
        if(type==="increase"){
            marnum = marnum + marcount1;
            $scope.marcount1 = marnum;
            console.log(mnum);
        }
        else if(type==="decrease"){
            marnum = marnum - 1;
            $scope.marcount1 = marnum;
        }
        marcount = marcount + 1;


        if (marname === "margarita" && marcount > 0) {
            console.log($scope.drink.vodka.content);
            if ($scope.drink.tequila.content >= 59.1 && $scope.drink.orange_juice.content >= 1 && $scope.drink.agave_nectar.content > 1 && $scope.drink.limes.content > 1)
            {
                console.log("savio margarita");
                if(type ==="increase"){
                $scope.drink.tequila.content = (($scope.drink.tequila.content) - (marcount * 29.5 * 1));
                $scope.drink.orange_juice.content = (($scope.drink.orange_juice.content) - (marcount * 1));
                $scope.drink.agave_nectar.content = (($scope.drink.agave_nectar.content) - (marcount * 1));
                $scope.drink.limes.content = ($scope.drink.limes.content - (marcount * 1));
                }
                else if(type ==="decrease"){
                    $scope.drink.tequila.content = (($scope.drink.tequila.content) + (marcount * 29.5 * 1));
                    $scope.drink.orange_juice.content = (($scope.drink.orange_juice.content) + (marcount * 1));
                    $scope.drink.agave_nectar.content = (($scope.drink.agave_nectar.content) + (marcount * 1));
                    $scope.drink.limes.content = ($scope.drink.limes.content + (marcount * 1));
                }
            }
            else {
                window.alert("This drink is not available");
            }
        }
    }
    a.screwcal= function(sname,scount,scount1,type) {
       /* console.log("reached");
        console.log(sname);
        snum = snum + scount1;
        $scope.scount1 = snum;
        //console.log(marcount1);
        scount1 = scount1 + 1;
        scount = scount + 1; */
        if(type==="increase"){
            snum = snum + scount1;
            $scope.scount1 = snum;
            console.log(snum);
        }
        else if(type==="decrease"){
            snum = snum - 1;
            $scope.scount1 = snum;
        }
        scount = scount + 1;



        if (sname === "screwdriver" && scount > 0) {
            //`console.log($scope.drink.vodka.content);
            if ($scope.drink.vodka.content >= 59.1 && $scope.drink.orange_juice.content >= 4)
            {
                console.log("savio screw");
                if(type ==="increase") {
                    $scope.drink.vodka.content = (($scope.drink.vodka.content) - (scount * 29.5 * 2));
                    $scope.drink.orange_juice.content = (($scope.drink.orange_juice.content) - (scount * 4));
                }
                else if(type==="decrease"){
                    $scope.drink.vodka.content = (($scope.drink.vodka.content) + (scount * 29.5 * 2));
                    $scope.drink.orange_juice.content = (($scope.drink.orange_juice.content) + (scount * 4));
                }
            }
            else {
                window.alert("This drink is not available");
            }
        }
    }
    a.mancal= function(manname,mancount,mancount1,type) {
/*        console.log("reached");
        console.log(manname);
        mannum = mannum + mancount1;
        $scope.mancount1 = mannum;
        //console.log(marcount1);
        mancount1 = mancount1 + 1;
        mancount = mancount + 1; */

        if(type==="increase"){
            mannum = mannum + mancount1;
            $scope.mancount1 = mannum;
            console.log(mannum);
        }
        else if(type==="decrease"){
            mannum = mannum - 1;
            $scope.mancount1 = mannum;
        }
        mancount = mancount + 1;


        if (manname === "manhattan" && mancount > 0) {
            //`console.log($scope.drink.vodka.content);
            if ($scope.drink.whiskey.content >= 59.1 && $scope.drink.sweet_Vermouth.content >= 29.5 && $scope.drink.cherries.content >=1)
            {
                console.log("savio manhattan");
                if(type==="increase") {
                    $scope.drink.whiskey.content = (($scope.drink.whiskey.content) - (mancount * 29.5 * 2));
                    $scope.drink.sweet_Vermouth.content = (($scope.drink.sweet_Vermouth.content) - (mancount * 29.5 * 1));
                    $scope.drink.cherries.content = (($scope.drink.cherries.content) - (mancount * 1));
                }
                else if(type==="decrease"){
                    $scope.drink.whiskey.content = (($scope.drink.whiskey.content) + (mancount * 29.5 * 2));
                    $scope.drink.sweet_Vermouth.content = (($scope.drink.sweet_Vermouth.content) + (mancount * 29.5 * 1));
                    $scope.drink.cherries.content = (($scope.drink.cherries.content) + (mancount * 1));
                }
            }
            else {
                window.alert("This drink is not available");
            }
        }
    }

    a.placeorder=function(count1,mcount1,marcount1,scount1,mancount1){

        console.log(count1,mcount1,marcount1,scount1,mancount1);
        var total=count1+mcount1+marcount1+scount1+mancount1;
        if(count1===undefined){
            count1="-"
        }
        else if(mcount1===undefined){
            mcount1= "-"
        }
        else if(marcount1===undefined){
            marcount1= "-"
        }
        else if(scount1===undefined){
            scount1= "-"
        }
        else if(mancount1===undefined){
            mancount1= "-"
        }
        $rootScope.drink1=count1;
        $rootScope.drink2=mcount1;
        $rootScope.drink3=marcount1;
        $rootScope.drink4=scount1;
        $rootScope.drink5=mancount1;
        $rootScope.summaryval=total;
      //  var e=document.getElementById("drinktotal");
      //  console.log(e);

    }



}])
    /*Directive to display the summary*/
    app.directive('summaryFn',summaryDir);
    function summaryDir(){
        var directive={
            template:'<h1 class="drinkhr">Summary</h1>' +
            '<div class="col-md-12 summary">' +
            '<div class="col-md-6 sumdrink">{{drink1}}</div> ' +
            '<div class="col-md-6 sumdrink">bloody mary</div>'+
             '</div>'+
            '<div class="col-md-12 summary">' +
            '<div class="col-md-6 sumdrink">{{drink2}}</div>'+
            '<div class="col-md-6 sumdrink">Martini</div>'+
              '</div>'+
            '<div class="col-md-12 summary">' +
            '<div class="col-md-6 sumdrink">{{drink3}}</div>'+
            '<div class="col-md-6 sumdrink">Margarita</div>'+
            '</div>'+
            '<div class="col-md-12 summary">' +
            '<div class="col-md-6 sumdrink">{{drink4}}</div>'+
             '<div class="col-md-6 sumdrink">Screwdriver</div>'+
             '</div>'+
            '<div class="col-md-12 summary">' +
            '<div class="col-md-6 sumdrink">{{drink5}}</div>'+
            '<div class="col-md-6 sumdrink">Manhattan</div>'+
            '</div>'+
            '<div class="col-md-12 summary">' +
            '<hr class="drinkhr">'+
            '<div class="col-md-6 sumdrink">{{summaryval}}</div>'+
            '<div class="col-md-6 sumdrink">Total</div>'+
            '</div>'
        };
        return directive;

    }

})()