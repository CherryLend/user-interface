import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { ReactNode, useState } from "react";
import Image from "next/image";

import Button from "./Button";
import Modal from "./Modal";
import Tooltip from "./Tooltip";

type TableHeaderProps = {
  label: string;
  sortAsc?: boolean;
  sortDesc?: boolean;
  onClick?: () => void;
};

const TableHeader = ({
  label,
  sortAsc,
  sortDesc,
  onClick,
}: TableHeaderProps) => (
  <th className="px-6" onClick={onClick}>
    <div className="flex items-center justify-center drop-shadow-md text-center text-md md:text-lg font-bold capitalize">
      {label}
      {sortAsc && <HiSortAscending className="ml-1 w-3 h-3" />}
      {sortDesc && <HiSortDescending className="ml-1 w-3 h-3" />}
    </div>
  </th>
);

type TableCellProps = {
  children: ReactNode;
};

const TableCell = ({ children }: TableCellProps) => (
  <td className="px-6 py-4 whitespace-normal first:border-l-2 first:rounded-l-lg border-y-2 last:border-r-2 last:rounded-r-lg border-[#E88CB5]/25 bg-[#F2BFD6]/50 dark:border-[#2A177C]/40 dark:bg-[#4F509D]/50">
    <div className="drop-shadow-md text-center max-sm:text-sm md:text-md font-medium capitalize flex justify-center">
      {children}
    </div>
  </td>
);

type TableRowProps = {
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => (
  <tr className="">{children}</tr>
);

type TableModalHeaderProps = {
  title: string;
  subtitle: string;
};

const TableModalHeader = ({ title, subtitle }: TableModalHeaderProps) => (
  <div className="pl-6 w-full">
    <h6 className="tracking-tighter text-lg -mb-2">{title}</h6>
    <small className="tracking-tight leading-none opacity-60">{subtitle}</small>
  </div>
);

export type TableDataType = {
  type: string;
  info: {
    rating: number;
    healthy: boolean;
  };
  token: {
    amount: number;
    name: string;
  };
  convertedToken: {
    amount: number;
    name: string;
  };
  lockedUpToken: {
    amount: number;
    name: string;
  };
  aprToken: {
    amount: number;
    name: string;
  };
  percentage: number;
  apr: number;
  term: number;
};

type TableProps = {
  headers: TableHeaderProps[];
  modalHeaders: TableModalHeaderProps[];
  data: TableDataType[];
  onConfirm: () => void;
};

const Table = ({ headers, modalHeaders, data, onConfirm }: TableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<TableDataType | null>(
    null
  );

  const openModal = (rowData?: TableDataType) => {
    setIsModalOpen(true);
    if (rowData) setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap border-separate border-spacing-y-4">
          <thead>
            <tr>
              {headers.map(({ label, sortAsc, sortDesc, onClick }) => (
                <TableHeader
                  key={label}
                  label={label}
                  sortAsc={sortAsc}
                  sortDesc={sortDesc}
                  onClick={onClick}
                />
              ))}
            </tr>
          </thead>
          <tbody className="">
            {data.map((rowData, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <div className="relative w-max">
                    <Button
                      onClick={() => openModal(rowData)}
                      className="px-6 capitalize"
                    >
                      {rowData.type}
                    </Button>

                    <Tooltip
                      id={"tab-tooltip-" + rowIndex}
                      content={rowData.info.rating}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative w-max flex items-center space-x-2">
                    <div className="text-left">
                      <p>
                        {`${rowData.token.amount.toLocaleString()} 
                      ${rowData.token.name}`}
                      </p>
                      <small className="text-[#2E2D2D] dark:text-white">
                        {`(~${rowData.convertedToken.amount.toLocaleString()}
                      ${rowData.convertedToken.name})`}
                      </small>
                    </div>
                    <Image
                      src={`/images/${rowData.token.name.toLowerCase()}.png`}
                      alt={`${rowData.token.name} Icon`}
                      width="28"
                      height="28"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative w-max flex items-center space-x-2">
                    <div className="text-left">
                      <p>
                        {`${rowData.lockedUpToken.amount.toLocaleString()} 
                      ${rowData.lockedUpToken.name}`}
                      </p>
                    </div>
                    <Image
                      src={`/images/${rowData.lockedUpToken.name.toLowerCase()}.png`}
                      alt={`${rowData.lockedUpToken.name} Icon`}
                      width="28"
                      height="28"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative w-max flex items-center space-x-2">
                    <div className="text-left">
                      <p>
                        {`${rowData.aprToken.amount.toLocaleString()} 
                      ${rowData.aprToken.name}`}
                      </p>
                      <small className="relative">
                        <span className="text-[#2E2D2D] dark:text-white">
                          {`${rowData.percentage.toLocaleString()}%`}
                        </span>
                        <small className="bg-white/20 py-0.5 md:py-1.5 px-2 ml-1 rounded-full absolute w-max">{`APR: ${rowData.apr.toLocaleString()}%`}</small>
                      </small>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative w-max flex items-center space-x-2">
                    {rowData.term} Days
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          title={`${selectedRowData?.type} Confirmation`}
        >
          <div className="font-bold grid grid-cols-2 place-items-center gap-4">
            <TableModalHeader {...modalHeaders[0]} />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">{`${selectedRowData?.token.amount.toLocaleString()} 
                      ${selectedRowData?.token.name}`}</p>
              <small className="tracking-tight opacity-60">
                {`(~${selectedRowData?.convertedToken.amount.toLocaleString()}
                      ${selectedRowData?.convertedToken.name})`}
              </small>
            </div>
            <TableModalHeader {...modalHeaders[1]} />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">
                {selectedRowData?.term} Days
              </p>
            </div>
            <TableModalHeader {...modalHeaders[2]} />
            <div className="px-6 w-full">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow">
                {`${selectedRowData?.aprToken.amount.toLocaleString()} 
                      ${selectedRowData?.aprToken.name}`}
              </p>
              <small className="tracking-tight opacity-60">
                {`(${selectedRowData?.percentage.toLocaleString()}%)`}
              </small>
            </div>
            <TableModalHeader {...modalHeaders[3]} />
            <div className="px-6 w-full relative">
              <p className="tracking-tighter text-lg -mb-2 text-[#E871DC] drop-shadow relative">
                <span className="relative">
                  {`${selectedRowData?.lockedUpToken.amount.toLocaleString()} 
                      ${selectedRowData?.lockedUpToken.name}`}
                  <Tooltip
                    id={"modal-tooltip"}
                    content={selectedRowData?.info.rating ?? ""}
                  />
                </span>
              </p>
            </div>
            <Button onClick={closeModal} className="button-modal">
              Decline
            </Button>
            <Button
              onClick={() => {
                onConfirm();
                closeModal();
              }}
              className="button-modal-fill"
            >
              Confirm
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Table;
