const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const values = document.querySelectorAll('.price')
	let sum = 0;
	values.forEach(item =>{
		sum += parseInt(item.textContent)
	});
  const totalCell = document.createElement('td');
  totalCell.textContent = sum;
  totalCell.style.fontWeight = 'bold';
	document.body.appendChild(totalCell);
  
};

getSumBtn.addEventListener("click", getSum);

