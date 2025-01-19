import { Avatar, Box, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { createColumnHelper, flexRender, getCoreRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import formatDate from "hooks/Dates";
import { useEffect, useState } from "react";
import useLastUserReports from "services/reports/LastGuardReports";
import { LastReport } from "services/reports/LastReport";

type Reports = {
    guard: {
        id: string;
        name: string
        lastName: string;
        picture: string;
    };
    reports: number;
    lastReport: {
        id: string;
        date: string;
        location: string;
    };
};

const columnHelper = createColumnHelper<Reports>();

export default function LastReports() {
    const { lastUserReports } = useLastUserReports();
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

    const columns = [
        columnHelper.accessor('guard', {
            id: 'guard',
            header: () => (
                <Text
                    justifyContent='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color='gray.400'>
                    Guardia
                </Text>
            ),
            cell: (info) => (
                <Flex align='center'>
                    <Avatar
                        src={info.getValue().picture}
                        w='30px'
                        h='30px'
                        me='8px'
                    />
                    <Text
                        color='gray.400'
                        fontSize='sm'
                        fontWeight='600'>
                        {info.getValue().name} {info.getValue().lastName}
                    </Text>
                </Flex>
            )
        }),
        columnHelper.accessor('reports', {
            id: 'reports',
            header: () => (
                <Text
                    justifyContent='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color='gray.400'>
                    Reportes
                </Text>
            ),
            cell: (info) => (
                <Text
                    color={textColorSecondary}
                    fontSize='sm'
                    fontWeight='500'>
                    {info.getValue()}
                </Text>
            )
        }),
        columnHelper.accessor('lastReport', {
            id: 'lastReport',
            header: () => (
                <Text
                    justifyContent='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color={textColor}>
                    Último reporte
                </Text>
            ),
            cell: (info) => (
                <Flex align='center'>
                    <Text
                        color={textColor}
                        fontSize='sm'
                        fontWeight='500'>
                        {info.getValue().date}
                    </Text>
                </Flex>
            )
        })
    ];
    const [sorting, setSorting] = useState<SortingState>([]);
    const [data, setData] = useState([]);
    const table = useReactTable({
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true
    });

    useEffect(() => {
        lastUserReports().then((response: [LastReport]) => {
            setData(response.map(user => {
                return {
                    guard: {
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        picture: ""
                    },
                    reports: 1,
                    lastReport: {
                        id: user.lastIssue.id,
                        date: user.lastIssue.received,
                        location: ""
                    }
                }
            }));
        });
    }, [table]);

    return (
        <Flex
            direction='column'
            w='100%'
            overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Flex
                align={{ sm: "flex-start", lg: "center" }}
                justify='space-between'
                w='100%'
                h={{ sm: 'auto', lg: '80px' }}
                px='22px'
                pb='20px'
                mb='10px'
                boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'>
                <Text color={textColor} fontSize='xl' fontWeight='600'>
                    Ultimos reportes
                </Text>
                <Button variant='action'>ver todos</Button>
            </Flex>
            <Box>
                <Table variant='simple' color='gray.500' mt="12px">
                    <Thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <Th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            pe='10px'
                                            borderColor={borderColor}
                                            cursor='pointer'
                                            onClick={header.column.getToggleSortingHandler()}>
                                            <Flex
                                                justifyContent='space-between'
                                                align='center'
                                                fontSize={{ sm: '10px', lg: '12px' }}
                                                color='gray.400'>
                                                {flexRender(header.column.columnDef.header, header.getContext())}{{
                                                    asc: '',
                                                    desc: '',
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </Flex>
                                        </Th>
                                    );
                                })}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.slice(0, 11).map((row) => {
                            return (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <Td
                                                key={cell.id}
                                                fontSize={{ sm: '14px' }}
                                                minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                                                borderColor='transparent'>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    );
};