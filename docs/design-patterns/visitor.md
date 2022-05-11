---
title: 访问者模式
---


<h1 align='center'>访问者模式</h1>

参考：

- [【设计模式】详解访问者（Visitor）模式](https://cloud.tencent.com/developer/article/1755832)
- [访问者模式](https://www.runoob.com/design-pattern/visitor-pattern.html)
- [Visitor 设计模式使用频率和经典场景](https://www.zhihu.com/question/37236639/answer/218204649)



访问者模式是一种将算法与对象结构分离的软件设计模式。主要解决稳定的数据结构和易变的操作耦合问题。

这个模式的基本想法如下：首先我们拥有一个由许多对象构成的对象结构，这些对象的类都拥有一个accept方法用来接受访问者对象；访问者是一个接口，它拥有一个visit方法，这个方法对访问到的对象结构中不同类型的元素作出不同的反应。

优点：方便扩展增加访问者，对同一批数据对象做不同的操作。

缺点：数据对象（被访问的对象）不方便修改，如果要修改，则访问者接口和每个具体的访问者都需要修改。

下面是一个简单的动物园场馆和游客的例子：

- 数据对象结构：这里用动物园表示，动物园里有很多动物的场馆
- 数据对象（接口）：动物场馆，每个场馆都可以接受（accept方法）游客（visitor）的参观
- 具体的数据对象：具体的场馆，例如熊猫管、大象管、老虎园……（一个动物园的场馆种类、数量应该是比较稳定的，不会经常变化）
- 访问者（接口）：游客，游客可以参观（visit方法）场馆
- 具体的访问者：具体的游客，例如儿童、学生、成人（简单的分类区别票价）

## Java 访问者模式

Demo

```java
public class VisitorPatternDemo {
    public static void main(String[] args) {
        // 动物园
        Zoo zoo = new Zoo();
        zoo.add(new PandaHouse());
        zoo.add(new TigerHouse());

        // 普通游客参观
        zoo.accept(new CommonVisitor());
        // 学生游客参观
        zoo.accept(new StudentVisitor());
        // 儿童游客参观
        zoo.accept(new KidVisitor());
    }
}


/**
 * 数据对象结构：动物园
 */
class Zoo {
    // 场馆列表
    private List<AnimalHouse> animalHouseList = new ArrayList<>();

    //接待游客
    public void accept(Visitor visitor) {
        for (AnimalHouse animalHouse : animalHouseList) {
            animalHouse.accept(visitor);
        }
    }

    public void add(AnimalHouse animalHouse) {
        animalHouseList.add(animalHouse);
    }

    public void remove(AnimalHouse animalHouse) {
        animalHouseList.remove(animalHouse);
    }
}


/**
 * 抽象接口：动物场馆
 */
interface AnimalHouse {
    // 接受访问者（游客）
    void accept(Visitor visitor);

    // 获取票价（不同的游客会有不同的票价）
    int getTicketRate();
}

/**
 * 具体场馆：熊猫管
 */
class PandaHouse implements AnimalHouse {
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    @Override
    public int getTicketRate() {
        // 成人票价，学生五折，儿童免费
        return 20;
    }
}

/**
 * 具体场馆：老虎园
 */
class TigerHouse implements AnimalHouse {
    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }

    @Override
    public int getTicketRate() {
        // 成人票价，学生五折，儿童免费
        return 10;
    }
}

/**
 * 抽象接口：游客
 */
interface Visitor {
    // 参观熊猫馆
    void visit(PandaHouse leopardSpot);
    // 参观老虎园
    void visit(TigerHouse dolphinSpot);
}

/**
 * 具体的访问者：普通游客
 */
class CommonVisitor implements Visitor {

    @Override
    public void visit(PandaHouse pandaHouse) {
        System.out.println("普通游客参观了熊猫馆，票价：" + pandaHouse.getTicketRate());
    }

    @Override
    public void visit(TigerHouse tigerHouse) {
        System.out.println("普通游客参观了老虎园，票价：" + tigerHouse.getTicketRate());
    }
}

/**
 * 具体的访问者：学生游客
 */
class StudentVisitor implements Visitor {

    @Override
    public void visit(PandaHouse pandaHouse) {
        // 学生票五折
        System.out.println("学生游客参观了熊猫馆，票价：" + pandaHouse.getTicketRate() * 0.5);
    }

    @Override
    public void visit(TigerHouse tigerHouse) {
        // 学生票五折
        System.out.println("学生游客参观了老虎园，票价：" + tigerHouse.getTicketRate());
    }
}

/**
 * 具体的访问者：儿童游客
 */
class KidVisitor implements Visitor {

    @Override
    public void visit(PandaHouse pandaHouse) {
        // 儿童免票
        System.out.println("儿童游客参观了熊猫馆，票价：0");
    }

    @Override
    public void visit(TigerHouse tigerHouse) {
        // 儿童免票
        System.out.println("儿童游客参观了老虎园，票价：0");
    }
}
```

## Python 访问者模式