import * as d3 from 'd3';
import { SingleContainer, Sankey, Tooltip } from '@unovis/ts';
import { SankeyData } from './sankeyData.js'

export default function (element) {
  const dataModel = new SankeyData();
  const chart = new SingleContainer(element, {
    height: 600,
    //width: 1000,
    //width: element.style.width,
    sizing: 'extend',
    //margin: { left: -100, right: -100 },
    // tooltip: new Tooltip({
    //   triggers: {
    //     [Sankey.selectors.node]: d => `node ${d.value}`,
    //     [Sankey.selectors.link]: d => `link ${d.value}`,
    //   },
    // }),
    component: new Sankey({
      nodeHorizontalSpacing: 200,
      /* Nodes */
      nodeIcon: n => n.expandable ? (n.expanded ? '-' : '+') : '',
      nodeCursor: n => n.expandable ? 'pointer' : 'no-drop',
      nodeAlign: 'left',
      nodeColor: n => n.nodeColor,
      nodeIconColor: 'black',
      /* Labels */
      label: n => n.label,
      subLabel: n => n.isRootNode ? '' : n.percentage,
      // labelVisibility: n => !n.isRootNode,
      labelMaxWidth: 210,
      labelForceWordBreak: false,
      // labelFit: 'wrap',

      //labelBackground: true,
      labelVerticalAlign: 'middle',
      // labelPosition: n => {
      //   console.log(n, n.isExpanded)
      //   return n.isExpanded ? 'left' : 'right'
      // },
      onmouseover: console.log("dfadddddsdfadf"),
      events: {
        [Sankey.selectors.node]: {
          click: toggleState,
          //mouseover: console.log("dfasdfa"),
        }
      },

      nodeSort: (a, b) => {
        const diff = b.sourceGroup?.value - a.sourceGroup?.value
        if (diff === 0) {
          let i = 0
          while (i < a.path.length
            && i < b.path.length
            && a.path[i].value === b.path[i].value
          ) {
            i++;
          }
          if (i === a.path.length) return 1
          if (i === b.path.length) return -1
          return b.path[i].value - a.path[i].value
        }
        return diff
      },
      highlightSubtreeOnHover: true,
      heightNormalizationCoeff: 0.5,
      nodePadding: 22,
      // iterations: 200,
    }),
  }, dataModel.data());

  function toggleState(n) {
    if (!n.expandable) return;
    if (n.expanded) {
      dataModel.collapse(n);
    } else {
      dataModel.expand(n);
    }
    const updatedData = dataModel.data()
    chart.setData(updatedData);
  }
}


