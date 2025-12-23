import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export const SnCoordsTable = () => {

    const test = {"id": 1, "x": "1", "y": "1", "r": "1", "status": "Не ок :/", "creation_datetime": "1235", "milliseconds": "12"};

    const products = []

    for (let i = 0; i < 1000; i++) {
        products.push(test);
    }

    return (
        <>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column sortable={true} field="id" header="ID"></Column>
                <Column sortable={true} field="x" header="x"></Column>
                <Column sortable={true} field="y" header="y"></Column>
                <Column sortable={true} field="r" header="r"></Column>
                <Column sortable={true} field="status" header="Статус"></Column>
                <Column sortable={true} field="creation_datetime" header="Дата броска"></Column>
                <Column sortable={true} field="milliseconds" header="Milliseconds"></Column>
            </DataTable>
        </>
    )
}