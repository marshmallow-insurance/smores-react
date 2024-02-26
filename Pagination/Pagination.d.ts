import { FC } from 'react';
import { MarginProps } from '../utils/space';
export type PaginationProps = {
    /** Total number of records  */
    total: number;
    /** Number of records per page  */
    partition: number;
    /** Handle page change */
    handlePageChange: (page: number) => void;
    /** Sets current page number */
    currentPage?: number;
} & MarginProps;
export declare const Pagination: FC<PaginationProps>;
