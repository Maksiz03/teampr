let flag = 1;

inputTableSum1_1 = document.getElementById('inputTableSum1-1');
    inputTableSum1_2 = document.getElementById('inputTableSum1-2');
    inputTableSum1_3 = document.getElementById('inputTableSum1-3');
    inputTableSum1_4 = document.getElementById('inputTableSum1-4');
    inputTableSum1_5 = document.getElementById('inputTableSum1-5');
    inputTableSum1_6 = document.getElementById('inputTableSum1-6');

    inputTableSum2_1 = document.getElementById('inputTableSum2-1');
    inputTableSum2_2 = document.getElementById('inputTableSum2-2');
    inputTableSum2_3 = document.getElementById('inputTableSum2-3');
    inputTableSum2_4 = document.getElementById('inputTableSum2-4');
    inputTableSum2_5 = document.getElementById('inputTableSum2-5');
    inputTableSum2_6 = document.getElementById('inputTableSum2-6');

    inputTableSum3_1 = document.getElementById('inputTableSum3-1');
    inputTableSum3_2 = document.getElementById('inputTableSum3-2');
    inputTableSum3_3 = document.getElementById('inputTableSum3-3');
    inputTableSum3_4 = document.getElementById('inputTableSum3-4');
    inputTableSum3_5 = document.getElementById('inputTableSum3-5');
    inputTableSum3_6 = document.getElementById('inputTableSum3-6');

    inputTableSum4_1 = document.getElementById('inputTableSum4-1');
    inputTableSum4_2 = document.getElementById('inputTableSum4-2');
    inputTableSum4_3 = document.getElementById('inputTableSum4-3');
    inputTableSum4_4 = document.getElementById('inputTableSum4-4');
    inputTableSum4_5 = document.getElementById('inputTableSum4-5');
    inputTableSum4_6 = document.getElementById('inputTableSum4-6');

    inputTableSum5_1 = document.getElementById('inputTableSum5-1');
    inputTableSum5_2 = document.getElementById('inputTableSum5-2');
    inputTableSum5_3 = document.getElementById('inputTableSum5-3');
    inputTableSum5_4 = document.getElementById('inputTableSum5-4');
    inputTableSum5_5 = document.getElementById('inputTableSum5-5');
    inputTableSum5_6 = document.getElementById('inputTableSum5-6');



    td2 = document.getElementById('sum2');
    td3 = document.getElementById('sum3');
    td4 = document.getElementById('sum4');
    td5 = document.getElementById('sum5');
    td6 = document.getElementById('sum6');
    dataT = [td2, td3, td4, td5, td6]

    part2 = document.getElementById('part2');
    part3 = document.getElementById('part3');
    part4 = document.getElementById('part4');
    part5 = document.getElementById('part5');
    part6 = document.getElementById('part6');
    partT = [part2, part3, part4, part5, part6]

    itog2 = document.getElementById('itog2');
    itog3 = document.getElementById('itog3');
    itog4 = document.getElementById('itog4');
    itog5 = document.getElementById('itog5');
    itog6 = document.getElementById('itog6');
    itogT = [itog2, itog3, itog4, itog5, itog6]


      td2.innerHTML = 0;
      td3.innerHTML = 0;
      td4.innerHTML = 0;
      td5.innerHTML = 0;
      td6.innerHTML = 0;
      itog2.innerHTML = 0;
      itog3.innerHTML = 0;
      itog4.innerHTML = 0;
      itog5.innerHTML = 0;
      itog6.innerHTML = 0;

    function setSUM2() {
      part = document.getElementById('part1');
      tdNum1_1 = document.getElementById('iter1-1');
      tdNum1_2 = document.getElementById('iter2-1');
      tdNum1_3 = document.getElementById('iter3-1');
      tdNum1_4 = document.getElementById('iter4-1');
      tdNum1_5 = document.getElementById('iter5-1');
      td2.innerHTML = (parseFloat(tdNum1_1.innerHTML) + parseFloat(tdNum1_2.innerHTML) + parseFloat(tdNum1_3.innerHTML) + parseFloat(tdNum1_4.innerHTML)+parseFloat(tdNum1_5.innerHTML)).toFixed(2)
      setPart()
    }
    function setSUM3() {
      tdNum1_1 = document.getElementById('iter1-2');
      tdNum1_2 = document.getElementById('iter2-2');
      tdNum1_3 = document.getElementById('iter3-2');
      tdNum1_4 = document.getElementById('iter4-2');
      tdNum1_5 = document.getElementById('iter5-2');
      td3.innerHTML = (parseFloat(tdNum1_1.innerHTML) + parseFloat(tdNum1_2.innerHTML) + parseFloat(tdNum1_3.innerHTML) + parseFloat(tdNum1_4.innerHTML)+parseFloat(tdNum1_5.innerHTML)).toFixed(2)
      setPart()
    }
    function setSUM4() {
      tdNum1_1 = document.getElementById('iter1-3');
      tdNum1_2 = document.getElementById('iter2-3');
      tdNum1_3 = document.getElementById('iter3-3');
      tdNum1_4 = document.getElementById('iter4-3');
      tdNum1_5 = document.getElementById('iter5-3');
      td4.innerHTML = (parseFloat(tdNum1_1.innerHTML) + parseFloat(tdNum1_2.innerHTML) + parseFloat(tdNum1_3.innerHTML) + parseFloat(tdNum1_4.innerHTML)+parseFloat(tdNum1_5.innerHTML)).toFixed(2)
      setPart()
    }
    function setSUM5() {

      tdNum1_1 = document.getElementById('iter1-4');
      tdNum1_2 = document.getElementById('iter2-4');
      tdNum1_3 = document.getElementById('iter3-4');
      tdNum1_4 = document.getElementById('iter4-4');
      tdNum1_5 = document.getElementById('iter5-4');
      td5.innerHTML = (parseFloat(tdNum1_1.innerHTML) + parseFloat(tdNum1_2.innerHTML) + parseFloat(tdNum1_3.innerHTML) + parseFloat(tdNum1_4.innerHTML)+parseFloat(tdNum1_5.innerHTML)).toFixed(2)
      setPart()
    }
    function setSUM6() {
      tdNum1_1 = document.getElementById('iter1-5');
      tdNum1_2 = document.getElementById('iter2-5');
      tdNum1_3 = document.getElementById('iter3-5');
      tdNum1_4 = document.getElementById('iter4-5');
      tdNum1_5 = document.getElementById('iter5-5');
      td6.innerHTML = (parseFloat(tdNum1_1.innerHTML) + parseFloat(tdNum1_2.innerHTML) + parseFloat(tdNum1_3.innerHTML) + parseFloat(tdNum1_4.innerHTML)+parseFloat(tdNum1_5.innerHTML)).toFixed(2)
      setPart()
    }
    function setSUM7() {
      setPart()
    }
    function setPart() {
      markKom = document.getElementById('markKom').value;
      for (var i = 0; i <= 5; i++) {
        if (parseFloat(dataT[i].innerHTML) == Math.max(parseFloat(td2.innerHTML), parseFloat(td3.innerHTML), parseFloat(td4.innerHTML), parseFloat(td5.innerHTML), parseFloat(td6.innerHTML))) {
          partT[i].innerHTML = 1
          itogT[i].innerHTML = (parseInt(markKom) * parseFloat(partT[i].innerHTML)).toFixed(2)
        }
        else {
          partT[i].innerHTML = (parseFloat(dataT[i].innerHTML) / Math.max(parseFloat(td2.innerHTML), parseFloat(td3.innerHTML), parseFloat(td4.innerHTML), parseFloat(td5.innerHTML), parseFloat(td6.innerHTML))).toFixed(2)
          itogT[i].innerHTML = (parseFloat(markKom) * parseFloat(partT[i].innerHTML)).toFixed(2)
        }
      }
    }



    function shablonSUMITER(Firstnum,secnum,thnum,fonum,fifnum,sum, inputSum){

      tdNum1_1 = document.getElementById(Firstnum).value;
      tdNum1_2 = document.getElementById(secnum).value;
      tdNum1_3 = document.getElementById(thnum).value;
      tdNum1_4 = document.getElementById(fonum).value;
      tdNum1_5 = document.getElementById(fifnum).value;
      tdNum1_6 = document.getElementById(sum);
      inputSum.innerHTML = ((parseInt(tdNum1_1) + parseInt(tdNum1_2) + parseInt(tdNum1_3) + parseInt(tdNum1_4)) * 0.3 + parseInt(tdNum1_5) * 0.7).toFixed(2)
      tdNum1_6.innerHTML = ((parseInt(tdNum1_1) + parseInt(tdNum1_2) + parseInt(tdNum1_3) + parseInt(tdNum1_4)) * 0.3 + parseInt(tdNum1_5) * 0.7).toFixed(2)

    }
    function setSUM1_1() {
      shablonSUMITER('inputTable1-2-1','inputTable1-3-1','inputTable1-4-1','inputTable1-5-1','inputTable1-6-1','iter1-1',inputTableSum1_1)
      setSUM2()
    }
    function setSUM1_2() {
      shablonSUMITER('inputTable1-1-2','inputTable1-3-2','inputTable1-4-2','inputTable1-5-2','inputTable1-6-2','iter1-2',inputTableSum1_2)
      setSUM3()
    }
    function setSUM1_3() {
      shablonSUMITER('inputTable1-1-3','inputTable1-2-3','inputTable1-4-3','inputTable1-5-3','inputTable1-6-3','iter1-3',inputTableSum1_3)
      setSUM4()
    }
    function setSUM1_4() {
      shablonSUMITER('inputTable1-1-4','inputTable1-2-4','inputTable1-3-4','inputTable1-5-4','inputTable1-6-4','iter1-4',inputTableSum1_4)
      setSUM5()
    }
    function setSUM1_5() {
      shablonSUMITER('inputTable1-1-5','inputTable1-2-5','inputTable1-3-5','inputTable1-4-5','inputTable1-6-5','iter1-5',inputTableSum1_5)
      setSUM6()
    }
    function setSUM1_6() {
      shablonSUMITER('inputTable1-1-6','inputTable1-2-6','inputTable1-3-6','inputTable1-4-6','inputTable1-5-6','iter1-6',inputTableSum1_6)

    }

    function AddTable(){
      if (flag ==1){
        var Table = document.getElementById('inputTable2');
        Table.classList.remove("hidden")
        flag = 2
      }
      else if (flag ==2){
        var Table = document.getElementById('inputTable3');
        Table.classList.remove("hidden")
        flag = 3
      }
      else if (flag ==3){
        var Table = document.getElementById('inputTable4');
        Table.classList.remove("hidden")
        var iter = document.getElementById('thIter4');
        iter.classList.remove("hidden")
        var iter4_1 = document.getElementById('iter4-1');
        iter4_1.classList.remove("hidden")
        var iter4_2 = document.getElementById('iter4-2');
        iter4_2.classList.remove("hidden")
        var iter4_3 = document.getElementById('iter4-3');
        iter4_3.classList.remove("hidden")
        var iter4_4 = document.getElementById('iter4-4');
        iter4_4.classList.remove("hidden")
        var iter4_5 = document.getElementById('iter4-5');
        iter4_5.classList.remove("hidden")
        flag = 4
      }
      else if (flag ==4){
        var Table = document.getElementById('inputTable5');
        Table.classList.remove("hidden")
        var iter = document.getElementById('thIter5');
        iter.classList.remove("hidden")
        var iter4_1 = document.getElementById('iter5-1');
        iter4_1.classList.remove("hidden")
        var iter4_2 = document.getElementById('iter5-2');
        iter4_2.classList.remove("hidden")
        var iter4_3 = document.getElementById('iter5-3');
        iter4_3.classList.remove("hidden")
        var iter4_4 = document.getElementById('iter5-4');
        iter4_4.classList.remove("hidden")
        var iter4_5 = document.getElementById('iter5-5');
        iter4_5.classList.remove("hidden")
        flag = 5
      }
    }

    function setSUM2_1() {
      shablonSUMITER('inputTable2-2-1','inputTable2-3-1','inputTable2-4-1','inputTable2-5-1','inputTable2-6-1','iter2-1',inputTableSum2_1)
      setSUM2()
    }
    function setSUM2_2() {
      shablonSUMITER('inputTable2-1-2','inputTable2-3-2','inputTable2-4-2','inputTable2-5-2','inputTable2-6-2','iter2-2',inputTableSum2_2)
      setSUM3()
    }
    function setSUM2_3() {
      shablonSUMITER('inputTable2-1-3','inputTable2-2-3','inputTable2-4-3','inputTable2-5-3','inputTable2-6-3','iter2-3',inputTableSum2_3)
      setSUM4()
    }
    function setSUM2_4() {
      shablonSUMITER('inputTable2-1-4','inputTable2-2-4','inputTable2-3-4','inputTable2-5-4','inputTable2-6-4','iter2-4',inputTableSum2_4)
      setSUM5()
    }
    function setSUM2_5() {
      shablonSUMITER('inputTable2-1-5','inputTable2-2-5','inputTable2-3-5','inputTable2-4-5','inputTable2-6-5','iter2-5',inputTableSum2_5)
      setSUM6()
    }
    function setSUM2_6() {
      shablonSUMITER('inputTable2-1-6','inputTable2-2-6','inputTable2-3-6','inputTable2-4-6','inputTable2-5-6','iter2-6',inputTableSum2_6)

    }

    function setSUM3_1() {
      shablonSUMITER('inputTable3-2-1','inputTable3-3-1','inputTable3-4-1','inputTable3-5-1','inputTable3-6-1','iter3-1',inputTableSum3_1)
      setSUM2()
    }
    function setSUM3_2() {
      shablonSUMITER('inputTable3-1-2','inputTable3-3-2','inputTable3-4-2','inputTable3-5-2','inputTable3-6-2','iter3-2',inputTableSum3_2)
      setSUM3()
    }
    function setSUM3_3() {
      shablonSUMITER('inputTable3-1-3','inputTable3-2-3','inputTable3-4-3','inputTable3-5-3','inputTable3-6-3','iter3-3',inputTableSum3_3)
      setSUM4()
    }
    function setSUM3_4() {
      shablonSUMITER('inputTable3-1-4','inputTable3-2-4','inputTable3-3-4','inputTable3-5-4','inputTable3-6-4','iter3-4',inputTableSum3_4)
      setSUM5()
    }
    function setSUM3_5() {
      shablonSUMITER('inputTable3-1-5','inputTable3-2-5','inputTable3-3-5','inputTable3-4-5','inputTable3-6-5','iter3-5',inputTableSum3_5)
      setSUM6()
    }
    function setSUM3_6() {
      shablonSUMITER('inputTable3-1-6','inputTable3-2-6','inputTable3-3-6','inputTable3-4-6','inputTable3-5-6','iter3-6',inputTableSum3_6)

    }

    function setSUM4_1() {
      shablonSUMITER('inputTable4-2-1','inputTable4-3-1','inputTable4-4-1','inputTable4-5-1','inputTable4-6-1','iter4-1',inputTableSum4_1)
      setSUM2()
    }
    function setSUM4_2() {
      shablonSUMITER('inputTable4-1-2','inputTable4-3-2','inputTable4-4-2','inputTable4-5-2','inputTable4-6-2','iter4-2',inputTableSum4_2)
      setSUM3()
    }
    function setSUM4_3() {
      shablonSUMITER('inputTable4-1-3','inputTable4-2-3','inputTable4-4-3','inputTable4-5-3','inputTable4-6-3','iter4-3',inputTableSum4_3)
      setSUM4()
    }
    function setSUM4_4() {
      shablonSUMITER('inputTable4-1-4','inputTable4-2-4','inputTable4-3-4','inputTable4-5-4','inputTable4-6-4','iter4-4',inputTableSum4_4)
      setSUM5()
    }
    function setSUM4_5() {
      shablonSUMITER('inputTable4-1-5','inputTable4-2-5','inputTable4-3-5','inputTable4-4-5','inputTable4-6-5','iter4-5',inputTableSum4_5)
      setSUM6()
    }
    function setSUM4_6() {
      shablonSUMITER('inputTable4-1-6','inputTable4-2-6','inputTable4-3-6','inputTable4-4-6','inputTable4-5-6','iter4-6',inputTableSum4_6)

    }

    function setSUM5_1() {
      shablonSUMITER('inputTable5-2-1','inputTable5-3-1','inputTable5-4-1','inputTable5-5-1','inputTable5-6-1','iter5-1',inputTableSum5_1)
      setSUM2()
    }
    function setSUM5_2() {
      shablonSUMITER('inputTable5-1-2','inputTable5-3-2','inputTable5-4-2','inputTable5-5-2','inputTable5-6-2','iter5-2',inputTableSum5_2)
      setSUM3()
    }
    function setSUM5_3() {
      shablonSUMITER('inputTable5-1-3','inputTable5-2-3','inputTable5-4-3','inputTable5-5-3','inputTable5-6-3','iter5-3',inputTableSum5_3)
      setSUM4()
    }
    function setSUM5_4() {
      shablonSUMITER('inputTable5-1-4','inputTable5-2-4','inputTable5-3-4','inputTable5-5-4','inputTable5-6-4','iter5-4',inputTableSum5_4)
      setSUM5()
    }
    function setSUM5_5() {
      shablonSUMITER('inputTable5-1-5','inputTable5-2-5','inputTable5-3-5','inputTable5-4-5','inputTable5-6-5','iter5-5',inputTableSum5_5)
      setSUM6()
    }
    function setSUM5_6() {
      shablonSUMITER('inputTable5-1-6','inputTable5-2-6','inputTable5-3-6','inputTable5-4-6','inputTable5-5-6','iter5-6',inputTableSum5_6)

    }