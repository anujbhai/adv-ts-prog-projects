class Grid {
    constructor() {
        this.Width = 0;
        this.Height = 0;
        this.Padding = 0;
    }

    Width: number;
    Height: number;
    Padding: number;
}

class Margin {
    constructor() {
        this.Left = 0;
        this.Top = 0;
        this.Width = 0;
        this.Height = 0;
        this.Padding = 0;
    }

    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Padding?: number;
}

function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
    let consolidatedGrid = <Grid & Margin> {};

    consolidatedGrid.Width = grid.Width + margin.Width;
    consolidatedGrid.Height = grid.Height + margin.Height;
    consolidatedGrid.Left = margin.Left;
    consolidatedGrid.Top = margin.Top;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;

    return consolidatedGrid;
}
