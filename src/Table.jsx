import { data } from './data/index.js' //  используем начальные данные

import './Table.css'

function Table() {
	function handleClick(e) {
		console.log(e)
	}

	return (
		<>
			<h1>Table</h1>
			<table>
			<thead>
				<tr>
					<th>Имя</th>
					<th>Возраст</th>
					<th>Удалить</th>
				</tr>
			</thead>
			<tbody>
			{ data.map(elem => (
				<tr key={ elem.id }>
					<td>{ elem.name }</td>
					<td>{ elem.age}</td>
					<td>
						<button 
							id={ elem.id }
							onClick={() => handleClick(elem) }
						>Удалить</button>
					</td>
				</tr>
		)) }
			</tbody>	
			</table>
		</>
	) 
}

export default Table
