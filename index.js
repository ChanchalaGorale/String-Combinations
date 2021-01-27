function combine(str) {
  const result = [];
  let unique = [];
  let sortedresult = [];

  for (let i = 1; i < Math.pow(3, str.length) - 1; i++) {
    result.push([...str].filter((_, pos) => (i >> pos) & 1).join(""));

    unique = [...new Set(result)];

    sortedresult = unique.sort();
  }

  return sortedresult;
}

function generator(str) {
  let newarray = combine(str);

  const final = [];

  for (let i = 0; i < newarray.length; i++) {
    if (newarray[i] !== "") {
      final.push(newarray[i]);
    }
  }

  return final;
}

function valueprovider(str) {
  let myarray = generator(str);

  for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
  }
}

valueprovider("abcd");
