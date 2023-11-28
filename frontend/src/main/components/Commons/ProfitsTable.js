import React from "react";
import OurTable from "main/components/OurTable";
import { Button } from "react-bootstrap";
import { useBackend } from "main/utils/useBackend";
// import { timestampToDate } from "main/utils/dateUtils";

const PagedProfitsTable = ({commonsId}) => {
    const testId = "PagedProfitsTable";
    const refreshJobsIntervalMilliseconds = 5000;

    const [selectedPage, setSelectedPage] = React.useState(0);

    const pageSize = 5;

    // Stryker disable all
    const {
        data: page
    } = useBackend(
        ["/api/profits/paged/commonsid"],
        {
            method: "GET",
            url: "/api/profits/paged/commonsid",
            params: {
                commonsId: commonsId,
                pageNumber: selectedPage,
                pageSize: pageSize,
            }
        },
        {content: [], totalPages: 0},
        { refetchInterval: refreshJobsIntervalMilliseconds }
    );
    // Stryker restore  all

    // const page =
    //     profits ?
    //     profits.map(profit => ({
    //         date: timestampToDate(profit.timestamp),
    //         ...profit
    //     })) : 
    //     // Stryker disable next-line ArrayDeclaration : no need to test what happens if [] is replaced with ["Stryker was here"]
    //     [];
    //     profitsForTable.reverse();

    const testid = "PagedProfitsTable";

    const previousPageCallback = () => {
        return () => {
            setSelectedPage(selectedPage - 1);
        }
    }

    const nextPageCallback = () => {
        return () => {
            setSelectedPage(selectedPage + 1);
        }
    }

    const columns = [
            {
                Header: "Profit",
                accessor: (row) => `$${row.amount.toFixed(2)}`,
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Health",
                accessor: (row) => `${row.avgCowHealth + '%'}`
            },
            {
                Header: "Cows",
                accessor: "numCows",
            },
        ];

    const sortees = React.useMemo(
        () => [
            {
                id: "Profit",
                desc: true
            }
        ],
        // Stryker disable next-line all
        []
    );

    return (
        <>
            <p>Page: {selectedPage + 1}</p>
            <Button data-testid={`${testId}-previous-button`}onClick={previousPageCallback()} disabled={ selectedPage === 0}>Previous</Button>
            <Button data-testid={`${testId}-next-button`} onClick={nextPageCallback()} disabled={page.totalPages===0 || selectedPage === page.totalPages-1}>Next</Button>
            < OurTable
                data={page.content}
                columns={columns}
                testid={testid}
                initialState={{ sortBy: sortees }}
            />
        </>
    );
};

export default PagedProfitsTable;



// export default function ProfitsTable({ profits }) {
    
//     // Stryker disable ArrayDeclaration : [columns] and [students] are performance optimization; mutation preserves correctness
//     const memoizedColumns = React.useMemo(() => 
//         [
//             {
//                 Header: "Profit",
//                 accessor: (row) => `$${row.amount.toFixed(2)}`,
//             },
//             {
//                 Header: "Date",
//                 accessor: "date",
//             },
//             {
//                 Header: "Health",
//                 accessor: (row) => `${row.avgCowHealth + '%'}`
//             },
//             {
//                 Header: "Cows",
//                 accessor: "numCows",
//             },
//         ], 
//     []);
//     const memoizedDates = React.useMemo(() => profits, [profits]);
//     // Stryker restore ArrayDeclaration

//     return <OurTable
//         data={memoizedDates}
//         columns={memoizedColumns}
//         testid={"ProfitsTable"}
//     />;
// };