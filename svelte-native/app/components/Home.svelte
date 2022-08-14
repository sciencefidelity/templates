<script lang="ts">
  import { action, ItemEventData } from "@nativescript/core"
  import { Template } from "svelte-native/components"

  interface Todo {
    name: string
  }

  let todos: Todo[] = []
  let dones: Todo[] = []
  const removeFromList = (list: Todo[], item: Todo) => {
    return list.filter(t => t !== item)
  }
  const addToList = (list: Todo[], item: Todo) => {
    return [item, ...list]
  }
  let textFieldValue = ""

  async function onItemTap(args: ItemEventData) {
    let result = await action(
      "What do you want to do with this task?",
      "Cancel",
      ["Mark completed", "Delete forever"]
    )

    console.log(result)
    let item = todos[args.index]
    switch (result) {
      case "Mark completed":
        dones = addToList(dones, item)
        todos = removeFromList(todos, item)
        break
      case "Delete forever":
        todos = removeFromList(todos, item)
        break
      case "Cancel" || undefined:
        break
    }
  }

  function onButtonTap() {
    if (textFieldValue === "") return
    console.log("New task added: " + textFieldValue + ".")
    todos = [{ name: textFieldValue }, ...todos]
    textFieldValue = ""
    console.log(todos)
  }

  async function onDoneTap(args: ItemEventData) {
    let result = await action(
      "What do you want to do with this task?",
      "Cancel",
      ["Mark To Do", "Delete forever"]
    )

    console.log(result)
    let item = dones[args.index]
    switch (result) {
      case "Mark To Do":
        todos = addToList(todos, item)
        dones = removeFromList(dones, item)
        break
      case "Delete forever":
        dones = removeFromList(dones, item)
        break
      case "Cancel" || undefined:
        break
    }
  }
</script>

<page>
  <actionBar title="My Tasks" />

  <tabView>
    <tabViewItem title="To Do">
      <gridLayout columns="*,120" rows="70,*">
        <textField
          col="0"
          row="0"
          bind:text={textFieldValue}
          hint="Type new task..."
          editable="true"
          on:returnPress={onButtonTap}
        />
        <button
          col="1"
          row="0"
          text="Add task"
          on:tap={onButtonTap}
          class="-primary"
        />

        <listView items={todos} on:itemTap={onItemTap} row="1" colSpan="2">
          <Template let:item>
            <label text={item.name} textWrap="true" />
          </Template>
        </listView>
      </gridLayout>
    </tabViewItem>
    <tabViewItem title="Completed">
      <listView items={dones} on:itemTap={onDoneTap}>
        <Template let:item>
          <label text={item.name} class="todo-item-completed" textWrap="true" />
        </Template>
      </listView>
    </tabViewItem>
  </tabView>
</page>

<style>
  textField {
    font-size: 20;
  }

  label {
    font-size: 18;
  }

  .todo-item-completed {
    color: #939393;
    text-decoration: line-through;
  }
</style>
