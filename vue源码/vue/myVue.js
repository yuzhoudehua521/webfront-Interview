const compileUtil = {
    getVal(expr, vm) {
        //vm.$data初始值
        return expr.split('.').reduce((data, currentVal) => {
            console.log(currentVal);
            return data[currentVal];
        }, vm.$data)
    },

    text(node, expr, vm) {  //v-text='msg' expr:msg
        const value = this.getVal(expr, vm);
        this.updater.textUpdater(node, value);
    },
    html(node, expr, vm) {
        const value = this.getVal(expr, vm);
        this.updater.htmlUpdater(node, value);
    },
    model(node, expr, vm) {
        const value = this.getVal(expr, vm);
        this.updater.modelUpdater(node, value);
    },
    on(node, expr, vm, eventName) {

    },


    updater: {
        modelUpdater(node, value){
            node.value = value
        },
        htmlUpdater(node, value){
            node.innerHTML = value
        },
        textUpdater(node, value) {
            node.textContent = value
        }
    }
}






class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm

        //获取文档碎片对象，放入内存中会减少页面的重绘和回流
        const fragment = this.nodeFragment(this.el)
        // console.log([fragment])

        //编译模板
        this.compile(fragment)

        //追加子元素到根元素
        this.el.appendChild(fragment)
    }

    compile(fragment) {
        //获取子结点
        const childNodes = fragment.childNodes;
        [...childNodes].forEach(child => {
            if(this.isElementNode(child)) {
                //是元素节点
                //编译元素节点
                this.compileElement(child)
            } else {
                //是文本节点
                //编译文本节点
                this.compileText(child)
            }

            //循环递归更深层次节点
            if(child.childNodes && child.childNodes.length) {
                this.compile(child)
            }
        })
    }

    compileElement(node) {
        const attributes = node.attributes;
        [...attributes].forEach(attr => {
            const {name, value} = attr //以数组解构成key-value  v-text='msg'
            if(this.isDirective(name)) {    //以v-开头，v-text,v-html,v-model,v-on:click
                const [,dirctive] = name.split('-')     //获得属性text,html,model,on:click
                const [dirName, eventName] = dirctive.split(':')    //dirName:text,html,model,on. eventName:click

                //处理属性和事件
                compileUtil[dirName](node, value, this.vm, eventName)
            }
        })

    }

    compileText(node) {

    }

    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    isElementNode(node) {
        return node.nodeType === 1   //true,false
    }

    nodeFragment(el) {
        //创建文档碎片
        const f = document.createDocumentFragment()
        let firstChild
        while (firstChild = el.firstChild) {
            // newchild 是 DocumentFragment 节点，则不会直接插入它，而是把它的子节点按序插入当前节点的 childNodes[] 数组的末尾。
            f.appendChild(firstChild)
        }
        return f
    }
}



class MVue {
    constructor(options) {
        this.$el = options.el
        this.$data = options.$data
        this.$options = options

        if(this.$el) {
            // 1.实现一个数据观察者
            // 2.实现一个指令解析器
            new Compile(this.$el, this)     //this等于当前new实例对象（MVue）
        }
    }
}