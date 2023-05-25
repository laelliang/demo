import { defineComponent } from 'vue';
import type { ColumnProps, ColumnDefaultSlots } from '../../type';
type Fn = (num: number) => void;
export interface Tree {
  width: number;
  height: number;
  node: any;
  depth?: number;
  children: any[];
  parent: any;
  heightCount: Fn;
  widthCount: Fn;
}

export default defineComponent({
  name: 'BTable',
  props: {
    data: {
      type: Array<ColumnProps>,
      required: true,
      validator: (value: Array<ColumnProps>) => {
        if (!Array.isArray(value)) {
          return false;
        }
        return true;
      }
    }
  },
  setup(props, ctx) {
    const leafNodes: any[] = [];
    const treeData = {
      width: 0,
      height: 0,
      node: null,
      depth: 0,
      children: [],
      parent: null,
      heightCount(num: number) {
        this.depth = this.depth > num ? this.depth : num;
        this.height = 1;
      },
      widthCount(num: number) {
        this.width += num;
      }
    };
    const traversalNode = (nodes: any[], parent: Tree) => {
      nodes.forEach(node => {
        const tree = {
          width: 0,
          height: 0,
          node: null,
          children: [],
          parent,
          heightCount(num: number) {
            this.height = num;
            this.parent.heightCount(num + 1);
          },
          widthCount(num: number) {
            this.parent.widthCount(num);
            this.width += num;
          }
        };
        if (node.type.name === 'BColgroup' && node.children.default) {
          const doms = node.children.default();
          tree.node = node;
          parent.children.push(tree);
          traversalNode(doms, tree);
        } else if (node.type.name === 'BColumn') {
          leafNodes.push(node);
          parent.children.push(tree);
          tree.node = node;
          tree.widthCount(1);
          tree.heightCount(1);
        }
      });
    };
    type DefaultFn = () => any[];
    const getNodes = ctx.slots.default as DefaultFn;
    const nodes = getNodes();
    traversalNode(nodes, treeData);

    const getTHead = () => {
      const doms: any[] = [];
      const depth = treeData.depth;
      const traversal = (data: any[], i = 0) => {
        data.forEach(val => {
          if (val.children.length !== 0) {
            val.height = 1;
          } else {
            val.height = depth - val.height;
          }
          let th;
          if (val.node?.children?.header) {
            th = (
              <th colspan={val.width} rowspan={val.height}>
                {val.node?.children.header(val.node?.props)}
              </th>
            );
          } else {
            th = (
              <th colspan={val.width} rowspan={val.height}>
                {val.node?.props?.title}
              </th>
            );
          }

          if (doms[i]) {
            doms[i].push(th);
          } else {
            doms[i] = [th];
          }
          if (val.children.length !== 0) {
            traversal(val.children, i + 1);
          }
        });
      };
      traversal(treeData.children);
      const getTR = (ths: any[]) => {
        const arr: any[] = [];
        ths.forEach(val => {
          arr.push(<tr>{val}</tr>);
        });
        return arr;
      };
      return <thead>{getTR(doms)}</thead>;
    };

    const getTBody = () => {
      const getTD = (rowData: any) => {
        return leafNodes.map(val => {
          let td;
          const defaultFn = val.children?.default;
          const field = val.props?.field;
          if (defaultFn) {
            const data: ColumnDefaultSlots = { data: rowData, field };
            td = <td>{defaultFn(data)}</td>;
          } else {
            td = <td>{rowData[field]}</td>;
          }
          return td;
        });
      };
      const trs = props.data.map(val => <tr>{getTD(val)}</tr>);
      return <tbody>{trs}</tbody>;
    };

    return () => (
      <table class="b-table">
        {getTHead()}
        {getTBody()}
      </table>
    );
  }
});
