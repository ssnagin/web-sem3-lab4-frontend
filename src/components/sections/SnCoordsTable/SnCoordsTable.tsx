import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useSelector} from "react-redux";
import type {RootState} from "../../../redux/store.ts";

export const SnCoordsTable = () => {
    const points = useSelector((state: RootState) => state.points.data);
    const myUsername = useSelector((state: RootState) => state.auth.username);

    // Функция для определения, можно ли удалять
    const isMyPoint = (username: string) => username === myUsername;

    // Колонки
    const actionBodyTemplate = (rowData: any) => {
        if (!isMyPoint(rowData.username)) return null;
        return (
            <button
                className="p-button p-button-danger p-button-text"
                onClick={() => {
                    // dispatch(deletePoint({ id: rowData.id, token }))
                    // + после этого dispatch(fetchAllPoints(token))
                }}
            >
                Удалить
            </button>
        );
    };

    return (
        <>
            <DataTable value={points} paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="id" header="ID" sortable />
                <Column field="x" header="x" sortable />
                <Column field="y" header="y" sortable />
                <Column field="R" header="R" sortable />
                <Column
                    field="inArea"
                    header="Статус"
                    body={(row) => (row.inArea ? '✅' : '❌')}
                    sortable
                />
                <Column field="timestamp" header="Дата броска" sortable />
                <Column
                    field="executionTime"
                    header="Мс"
                    body={(row) => (row.executionTime / 1_000_000).toFixed(2)} // наносек → мс
                />
                <Column field="username" header="Пользователь" sortable />
                <Column body={actionBodyTemplate} header="Действия" />
            </DataTable>
        </>
    )
}