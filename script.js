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
	const totalrow = document.createElement('tr')
	totalrow.setAttribute("id","ans")
	const totallable = document.createElement('td');
	totallable.textContent = "Total Price"
    const totalCell = document.createElement('td');
    totalCell.textContent = sum;
	totalrow.appendChild(totallable);
	totalrow.appendChild(totalCell)

	const table =  document.querySelector('table');
	table.appendChild(totalrow)
  
};

getSumBtn.addEventListener("click", getSum);

