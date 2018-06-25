// 무명함수를 만들면서 바로 호출하는 함수.
// function test() {};
// var dummyDB = test();
// 이 두개를 합치면 아래식과 같은 모습으로
var dummyDB = (function () {

    // 변수 선언
    var dummyDB = {};
    var storage = [
        // {
        //     id:1,
        //     name:'War',
        //     region: 'asdf'
        // }
    ];
    var count = 1;

    dummyDB.get = function (id) {
        if (id) {
            // 변수 가공
            id = (typeof id == 'string') ? Number(id) : id;

            // 데이터 선택
            for (var ix in storage) {
                if (storage[ix].id === id) {
                    return storage[ix];
                }
            }
        } else {
            return storage;
        }
    };

    dummyDB.insert = function(data){
        data.id = count++;
        storage.push(data);
        return data;
    }

    dummyDB.remove = function(id){
        id = (typeof id ==='string') ? Number(id) : id;

        for(var ix in storage){
            if(storage[ix].id === id){
                // 해당 데이터 제거
                storage.splice(ix,1);

                // 제거 성공 반환 메세지
                return true;
            }
        }

        // 제거 실패 메세지 반환
        return false;
    }


    // 리턴.
    return dummyDB;
})();

module.exports = {
    dummyDB : dummyDB
};