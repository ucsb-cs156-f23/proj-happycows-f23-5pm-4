import OurTable from "main/components/OurTable";

// should take in a players list from a commons
export default function ReportHeaderTable({ report  }) {
    const USD = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const columns = [
        {
            Header: 'Cow Price',
            id: 'cowPrice',
            accessor: (row, _rowIndex) => {
                return USD.format(row.cowPrice);
            },
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'Milk Price',
            id: 'milkPrice',
            accessor: (row, _rowIndex) => {
                return USD.format(row.milkPrice);
            },
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'Start Bal',
            id: 'startingBalance',
            accessor: (row, _rowIndex) => {
                return USD.format(row.startingBalance);
            },
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'Start Date',
            id: 'startingDate',
            accessor: (row, _rowIndex) => String(row.startingDate).substring(0, 10),
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },

        },
        {
            Header: 'Leaderboard',
            id: 'showLeaderboard',
            accessor: (row, _rowIndex) => String(row.showLeaderboard), // hack needed for boolean values to show up
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'Capacity',
            accessor: 'carryingCapacity',
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'Degrad Rate',
            accessor: 'degradationRate',
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'BelowCap',
            accessor: 'belowCapacityHealthUpdateStrategy',
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
        {
            Header: 'AboveCap',
            accessor: 'aboveCapacityHealthUpdateStrategy',
            Cell: (props) => {
                return (
                  <div style={{textAlign: "right"}}>{props.value}</div>)
                  },
        },
    ];

    const testid = "ReportHeaderTable";

    return <OurTable
        data={[report]}
        columns={columns}
        testid={testid}
    />;

};