
function feetToMile(feet){
    if (feet <= 0){
        return "Invalid Input! Feet must be greater than 0";
    }
        
    return feet/5280;
}


function woodCalculator(chair,table,bed){
    
    wood_for_chair = chair * 1;
    wood_for_table = table * 3;
    wood_for_bed = bed * 5;
    total_wood_need = wood_for_chair + wood_for_table + wood_for_bed;
    return total_wood_need;
}


function tinyFriend(friendList){
    if (friendList == 0){
        return ' Friend list empty ';
    }
    var smallestName = friendList[0];

    for(i=0;i<friendList.length;i++){
        var friendName = friendList[i];
        
        if(friendName.length  < smallestName.length){
            smallestName = friendName;
        }
    }
    return smallestName;
}


function brickCalculator(floor_number){
    if(floor_number <= 0 ){
        return "Invalid Input"
    }
    
    else if (floor_number>=1 && floor_number<=10){
        var total_feet = 15*floor_number;
        var total_brick = total_feet*1000;
    
        return total_brick;
    
    }
    
    else if (floor_number>=11 && floor_number<=20){
        var first_ten_floor_feet = 15*10;
        var first_ten_floor_brick = first_ten_floor_feet*1000;
        
    
        var rest_of_floor = floor_number - 10;
        var rest_of_floor_feet = 12*rest_of_floor;
        
        var rest_of_floor_brick = rest_of_floor_feet*1000;
        var total_brick = first_ten_floor_brick + rest_of_floor_brick
    
        return total_brick;
    
    
    }
    
    else(floor_number>=21)
        var first_ten_floor_feet = 15*10;
        var first_ten_floor_brick = first_ten_floor_feet*1000; 
        
        
        var second_ten_floor_feet = 12*10;
        var second_ten_floor_brick = second_ten_floor_feet*1000;
    
    
        var rest_of_floor = floor_number - 20;
        var rest_of_floor_feet = 10*rest_of_floor;
        var rest_of_floor_brick = rest_of_floor_feet*1000;
    
        var total_brick = first_ten_floor_brick + second_ten_floor_brick + rest_of_floor_brick;
        return total_brick;
    
    
}



















