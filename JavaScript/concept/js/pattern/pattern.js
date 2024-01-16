function pattern_1() {
  /*
    ---------- pattern-1 ----------
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * * *
    
    */

  const count = 5;

  let add = "";

  for (let i = 0; i < count; i++) {
    for (let j = 0; j <= i; j++) {
      add += "* ";
    }
    add += "<br>";
  }

  console.log(add);

  return add;
}

function pattern_2() {
  /*
    ---------- pattern-2 ----------
    
            * 
          * * 
        * * * 
      * * * * 
    * * * * * 
    
    */
  const count = 5;

  let add = "";

  for (let row = 1; row <= count; row++) {
    for (let col = 1; col <= count; col++) {
      if (col <= count - row) {
        add += "  ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  // let space = "  ";

  // for (let i = 0; i <= count; i++) {
  //     for (let k = count - 1; k >= i; k--) {
  //         add += space;
  //     }
  //     for (let j = 0; j <= i; j++) {
  //         add += "* ";
  //     }
  //     add += "\n";
  // }

  console.log(add);

  return add;
}

function pattern_3() {
  /*
    ---------- pattern-3 ----------

       * 
      * * 
     * * * 
    * * * * 
   * * * * * 
    
    */

  const count = 5;

  let add = "";

  for (let row = 1; row <= count; row++) {
    for (let col = 1; col <= count; col++) {
      if (col <= count - row) {
        add += " ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_4() {
  /*
    ---------- pattern-4 ----------
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
    
    */

  const count = 5;

  let add = "";

  for (let i = 1; i <= count; i++) {
    for (let j = count; j >= i; j--) {
      add += "* ";
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_5() {
  /*
    ---------- pattern-5 ----------
   * * * * * 
     * * * * 
       * * * 
         * * 
           * 
    */

  const count = 5;

  let add = "";

  for (let i = 0; i < count; i++) {
    for (let j = 1; j <= count; j++) {
      if (j <= i) {
        add += "  ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_6() {
  /*
    ---------- pattern-6 ----------

       * 
      * * 
     * * * 
    * * * * 
   * * * * * 
    
    */
  const count = 5;

  let add = "";

  for (let i = 0; i < count; i++) {
    for (let j = 1; j <= count; j++) {
      if (j <= i) {
        add += " ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_7() {
  /*
---------- pattern-7 ----------    
        *         
      * * *       
    * * * * *     
  * * * * * * *   
* * * * * * * * * 
    */
  const n = 5;
  let add = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n * 2 - 1; col++) {
      if (col <= n - row || col >= n + row) {
        add += "  ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }
  return add;
}

function pattern_8() {
  /*
---------- pattern-8 ----------  

* * * * * * * * * 
  * * * * * * *   
    * * * * *     
      * * *       
        *         
        
    */
  const n = 5;
  let colPrint = n * 2 - 1;
  let add = "";

  for (let row = 0; row < n; row++) {
    for (let col = 1; col <= colPrint; col++) {
      if (col <= row || col >= n * 2 - row) {
        add += "  ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }
  return add;
}

function pattern_9() {
  /* 
    
    ---------- pattern-9 ----------

    * * * *     
     * * * *    
      * * * *   
       * * * *  
        * * * *
    
    */
  const n = 5;
  let add = "";

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n + row; col++) {
      if (col <= row) {
        add += " ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }
  console.log(add);

  return add;
}

function pattern_10() {
  const count = 5;

  if (count % 2 == 0) {
    half = count / 2;
  } else {
    half = count / 2 + 0.5;
  }

  diff = count - half;

  let add = "";

  // for (let row = 1; row <= half; row++) {
  //     for (let col = 1; col <= half; col++) {
  //         if (col <= half - row) {
  //             add += " ";
  //         } else {
  //             add += "* ";
  //         }
  //     }
  //     add += "\n";
  // }
  // for (let i = 0; i < diff; i++) {
  //     for (let j = 1; j <= diff; j++) {
  //         if (j <= i) {
  //             add += " ";
  //         } else {
  //             add += "* ";
  //         }
  //     }
  //     add += "\n";
  // }

  for (let row = 1; row <= count; row++) {
    for (let col = 1; col <= count; col++) {
      if (col <= count - row) {
        add += " ";
      } else if (row > half) {
        if (col <= half - 1 || col >= half + 1) {
          add += "  ";
        } else {
          add += "* ";
        }
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }
  console.log(add);
  return add;
}

function pattern_11() {
  const count = 5;

  let add = "";

  for (let row = 1; row <= count; row++) {
    for (let space = 1; space <= count - row; space++) {
      add += " ";
    }
    let counter = 1;
    for (let col = 1; col <= row; col++) {
      add += counter += " ";
      counter = (counter * (row - col)) / col;
    }
    add += "\n";
  }

  return add;
}

// console.log(pattern_11());

function pattern_12() {
  const n = 5;

  let add = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n - 1; col++) {
      if (col <= row || col == n - 1) {
        add += "* ";
      } else {
        add += "  ";
      }
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_13() {
  const num = 5;

  let add = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i > 0 && j > 0 && i < num - 1 && j < num - 1) {
        add += "  ";
      } else if (i == num - 1) {
        add += "* ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  console.log(add);

  return add;
}

function pattern_14() {
  const count = 5;

  let add = "";

  for (let row = 1; row <= count; row++) {
    for (let col = 1; col <= count; col++) {
      if (col <= count - row) {
        add += " ";
      } else {
        add += "* ";
      }
    }
    add += "\n";
  }

  return add;
}

function pattern_15() {
  const count = 5;
  let counter = 0;
  let add = "";

  for (let row = 1; row <= count; row++) {
    for (let col = 1; col <= row; col++) {
      counter++;
      add += counter + " ";
    }
    add += "\n";
  }
  return add;
}

// console.log(pattern_15());

// document.getElementById("pattern-1").innerHTML = pattern_1();
// document.getElementById("pattern-2").innerHTML = pattern_2();
// document.getElementById("pattern-3").innerHTML = pattern_3();
// document.getElementById("pattern-4").innerHTML = pattern_4();
// document.getElementById("pattern-5").innerHTML = pattern_5();
// document.getElementById("pattern-6").innerHTML = pattern_6();
// document.getElementById("pattern-7").innerHTML = pattern_7();
// document.getElementById("pattern-8").innerHTML = pattern_8();
// document.getElementById("pattern-9").innerHTML = pattern_9();
// document.getElementById("pattern-10").innerHTML = pattern_10();
// document.getElementById("pattern-11").innerHTML = pattern_11();
// document.getElementById("pattern-12").innerHTML = pattern_12();
// document.getElementById("pattern-13").innerHTML = pattern_13();
// document.getElementById("pattern-14").innerHTML = pattern_14();
// document.getElementById("pattern-15").innerHTML = pattern_15();
