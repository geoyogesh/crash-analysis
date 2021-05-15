import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash-dashboard',
  templateUrl: './crash-dashboard.component.html',
  styleUrls: ['./crash-dashboard.component.scss'],
})
export class CrashDashboardComponent implements OnInit {
  data = [
    {
      group: 'Dataset 1',
      date: '2019-01-01T05:00:00.000Z',
      value: 0,
    },
    {
      group: 'Dataset 1',
      date: '2019-01-06T05:00:00.000Z',
      value: -37312,
    },
    {
      group: 'Dataset 1',
      date: '2019-01-08T05:00:00.000Z',
      value: -22392,
    },
    {
      group: 'Dataset 1',
      date: '2019-01-15T05:00:00.000Z',
      value: -52576,
    },
    {
      group: 'Dataset 1',
      date: '2019-01-19T05:00:00.000Z',
      value: 20135,
    },
    {
      group: 'Dataset 2',
      date: '2019-01-01T05:00:00.000Z',
      value: 47263,
    },
    {
      group: 'Dataset 2',
      date: '2019-01-05T05:00:00.000Z',
      value: 14178,
    },
    {
      group: 'Dataset 2',
      date: '2019-01-08T05:00:00.000Z',
      value: 23094,
    },
    {
      group: 'Dataset 2',
      date: '2019-01-13T05:00:00.000Z',
      value: 45281,
    },
    {
      group: 'Dataset 2',
      date: '2019-01-19T05:00:00.000Z',
      value: -63954,
    },
  ];
  options = {
    title: 'Area (time series - natural curve)',
    axes: {
      bottom: {
        title: '2019 Annual Sales Figures',
        mapsTo: 'date',
        scaleType: 'time',
      },
      left: {
        mapsTo: 'value',
        scaleType: 'linear',
      },
    },
    curve: 'curveNatural'
  };

  data1 = [
    {
      group: 'Qty',
      value: 65000,
    },
    {
      group: 'More',
      value: 29123,
    },
    {
      group: 'Sold',
      value: 35213,
    },
    {
      group: 'Restocking',
      value: 51213,
    },
    {
      group: 'Misc',
      value: 16932,
    },
  ];
  options1 = {
    title: 'Vertical simple bar (discrete)',
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        mapsTo: 'group',
        scaleType: 'labels',
      },
    }
  };
  data2 = [
    {
      group: 'Dataset 1',
      key: 'Qty',
      value: 65000,
    },
    {
      group: 'Dataset 1',
      key: 'More',
      value: -29123,
    },
    {
      group: 'Dataset 1',
      key: 'Sold',
      value: -35213,
    },
    {
      group: 'Dataset 1',
      key: 'Restocking',
      value: 51213,
    },
    {
      group: 'Dataset 1',
      key: 'Misc',
      value: 16932,
    },
    {
      group: 'Dataset 2',
      key: 'Qty',
      value: 32432,
    },
    {
      group: 'Dataset 2',
      key: 'More',
      value: -21312,
    },
    {
      group: 'Dataset 2',
      key: 'Sold',
      value: -56456,
    },
    {
      group: 'Dataset 2',
      key: 'Restocking',
      value: -21312,
    },
    {
      group: 'Dataset 2',
      key: 'Misc',
      value: 34234,
    },
    {
      group: 'Dataset 3',
      key: 'Qty',
      value: -12312,
    },
    {
      group: 'Dataset 3',
      key: 'More',
      value: 23232,
    },
    {
      group: 'Dataset 3',
      key: 'Sold',
      value: 34232,
    },
    {
      group: 'Dataset 3',
      key: 'Restocking',
      value: -12312,
    },
    {
      group: 'Dataset 3',
      key: 'Misc',
      value: -34234,
    },
    {
      group: 'Dataset 4',
      key: 'Qty',
      value: -32423,
    },
    {
      group: 'Dataset 4',
      key: 'More',
      value: 21313,
    },
    {
      group: 'Dataset 4',
      key: 'Sold',
      value: 64353,
    },
    {
      group: 'Dataset 4',
      key: 'Restocking',
      value: 24134,
    },
    {
      group: 'Dataset 4',
      key: 'Misc',
      value: 24134,
    },
  ];
  options2 = {
    title: 'Vertical grouped bar (discrete)',
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        scaleType: 'labels',
        mapsTo: 'key',
      },
    }
  };

  data3 = [
    {
      group: 'Dataset 1',
      date: 1558453260000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558453320000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558453380000,
      value: 5,
    },
    {
      group: 'Dataset 1',
      date: 1558453440000,
      value: 1,
    },
    {
      group: 'Dataset 1',
      date: 1558453500000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558453560000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558453620000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558453680000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558453740000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558453800000,
      value: 0,
    },
    {
      group: 'Dataset 1',
      date: 1558453860000,
      value: 5,
    },
    {
      group: 'Dataset 1',
      date: 1558453920000,
      value: 5,
    },
    {
      group: 'Dataset 1',
      date: 1558453980000,
      value: 6,
    },
    {
      group: 'Dataset 1',
      date: 1558454040000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558454100000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558454160000,
      value: 6,
    },
    {
      group: 'Dataset 1',
      date: 1558454280000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558454340000,
      value: 6,
    },
    {
      group: 'Dataset 1',
      date: 1558454400000,
      value: 0,
    },
    {
      group: 'Dataset 1',
      date: 1558454460000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558454520000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558454580000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558454640000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558454700000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558454760000,
      value: 2,
    },
    {
      group: 'Dataset 1',
      date: 1558454820000,
      value: 4,
    },
    {
      group: 'Dataset 1',
      date: 1558454880000,
      value: 1,
    },
    {
      group: 'Dataset 1',
      date: 1558454940000,
      value: 1,
    },
    {
      group: 'Dataset 1',
      date: 1558455000000,
      value: 3,
    },
    {
      group: 'Dataset 1',
      date: 1558455060000,
      value: 2,
    },
  ];
  options3 = {
    title: 'Sparkline (modified area chart)',
    grid: {
      x: {
        enabled: false,
      },
      y: {
        enabled: false,
      },
    },
    axes: {
      bottom: {
        visible: false,
        title: '2019 Annual Sales Figures',
        mapsTo: 'date',
        scaleType: 'time',
      },
      left: {
        visible: false,
        mapsTo: 'value',
        scaleType: 'linear',
      },
    },
    color: {
      gradient: {
        enabled: true,
      },
    },
    points: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
