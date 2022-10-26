import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { FetchData } from "@/interfaces";
import { Box } from "@mui/material";
import { COLUMNS } from "@/utils";
import { H1 } from "@/styles";

interface Props {
  data: FetchData[];
}

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput: string) =>
          searchInput
            .split(",")
            .map((value) => value.trim())
            .filter((value) => value !== "")
        }
      />
    </Box>
  );
}

export const CovidList = ({ data }: Props) => {
  return (
    <div className="">
      <H1 className="">Tabla sobre el registro del Covid</H1>
      <DataGrid
        columns={COLUMNS}
        rows={data}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row: any) => row.id_de_caso + row.edad}
        style={{ height: "650px", marginTop: 40 }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100 },
          },
        }}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </div>
  );
};
