import Pagination from "./PaginationContainer/Pagination.container";
import { IQuery, IQueryFetchBoardsArgs } from "../types/generated/types";
import { ApolloQueryResult } from "@apollo/client";
interface IPaginationPageProps {
  refetch?: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
export default function PaginationPage(props: IPaginationPageProps) {
  return <Pagination refetch={props.refetch} count={props.count} />;
}
