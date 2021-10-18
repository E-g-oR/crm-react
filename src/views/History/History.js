import React from "react";
import { Button, Chip, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const History = () => {
	return (
		<>
			<Typography component="h1" variant="h3">History</Typography>
			<Box>
				<Paper variant="outlined">
					<table>
						<thead>
							<tr>
								<th >#</th>
								<th>Сумма</th>
								<th>Дата</th>
								<th>Категория</th>
								<th>Тип</th>
								<th>Открыть</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>9 990 р.</td>
								<td>25.12.2021</td>
								<td>для работы</td>
								<td>
									<Chip label="расход" color="error" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>1 700 бел. р.</td>
								<td>07.02.2022</td>
								<td>для работы</td>
								<td>
									<Chip label="расход" color="error" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>1 500 р.</td>
								<td>07.12.2021</td>
								<td>для работы</td>
								<td>
									<Chip label="доход" color="success" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
						</tbody>

					</table>
				</Paper>
			</Box>
		</>
	)
}
export default History;